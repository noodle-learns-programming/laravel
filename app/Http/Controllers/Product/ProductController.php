<?php

namespace App\Http\Controllers\Product;

use App\User;
use App\Models\Product;
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

  public function index()
  {
    return view('product.create');  
  }

  public function store(Request $request)
  {
    $product    = new Product();
    $rules      = $product->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $product->fill($request->all());
    $result   = $product->save();

    return response()->json([
      'result' => $result
    ]);
  }
}
