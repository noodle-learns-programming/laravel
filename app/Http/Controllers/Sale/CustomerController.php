<?php

namespace App\Http\Controllers\Sale;

use App\User;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
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
    $customers = Customer::paginate(10);
    return $customers;
  }

  public function store(Request $request)
  {
    $customer   = new Customer();
    $rules      = $customer->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $result   = $customer->create($input);

    return response()->json($result);
  }
}
