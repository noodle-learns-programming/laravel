<?php

namespace App\Http\Controllers\Stock;

use Auth;
use App\User;
use App\Models\Product;
use App\Models\Product\Price;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
  /**
   * Show the profile for the given user.
   *
   * @return Response
   */
  public function create()
  {
    return view('product.create');
  }

  public function update(Request $request, $id)
  {
    $product    = Product::find($id);
    if ($request->isMethod('patch')) {
      if( $request->get('price') ){
        $product->prices()->update(array(
          'is_active' => 0
        ));
        $product->prices()->save(new Price([
          'price'           => $request->get('price'),
          'is_active'       => 1,
          'created_user_id' => Auth::user()->id
        ]));
      }
    }
    return $product;
  }

  public function index(Request $request)
  {
    $q = $request->get('q');
    if( $q )
    {

    }
    $products = Product::with('brand')
      ->with('stock')
      ->with('unit')
      ->where('name', 'LIKE', '%'.$q.'%')
      ->orderBy('id', 'desc')
      ->paginate(6);
    return $products;
  }

  public function store(Request $request)
  {
    $product    = new Product();
    $rules      = $product->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $file     = $request->file('image');
    if ($file && $file->isValid()) {
      $filename = time().'.'.$file->getClientOriginalExtension();
      $file->move(public_path('upload/product'), $filename);
      $input['image'] = $filename;
    }
    $result = $product->create($input);
    $product->prices()->update([
      'is_active' => 0
    ]);
    $result->prices()->save(new Price([
      'price'           => $input['price'],
      'is_active'       => 1,
      'created_user_id' => Auth::user()->id
    ]));
    return response()->json([
      'result' => $result
    ]);
  }
}
