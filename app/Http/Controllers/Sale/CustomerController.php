<?php

namespace App\Http\Controllers\Sale;

use Auth;
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

  public function show($id)
  {
    $customer = Customer::find($id);
    $data = $customer->toArray();
    return $data;
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
    $result   = $customer->updateOrCreate([
      'mobile_phone' => $input['mobile_phone']
    ],$input);

    return $result;
  }

  public function update($id, Request $request)
  {
    $customer   = Customer::find($id);
    $rules      = $customer->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    if( isset($input['image']) && empty($input['image']) ) {
      unset($input['image']);
    }
    $customer->update($input);
    $customer->save();
    return $customer;
  }

  public function getSearch(Request $request)
  {
    $q         = $request->get('q');
    $limit     = $request->get('limit', 5);
    $customers = Customer::where('mobile_phone', 'like', $q.'%')
    ->with('addresses')
    ->paginate($limit);
    return $customers;
  }
}
