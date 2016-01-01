<?php

namespace App\Http\Controllers\Product;

use App\Product;
use App\User;
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
    $rules = [
      'name'  => 'required'
    ];
    $validator = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $product  = new Product($input);
    $result   = $product->save();

    return response()->json([
      'result' => $result
    ]);
  }
}
