<?php

namespace App\Http\Controllers\Sale;

use App\User;
use App\Models\Address;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AddressController extends Controller
{
  public function index()
  {
    $addresses = Address::paginate(10);
    return $addresses;
  }

  public function show($id)
  {
    $address = Address::find($id);
    $data = $address->toArray();
    return $data;
  }

  public function store(Request $request)
  {
    $address   = new Address();
    $rules      = $address->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $result   = $address->create($input);

    return response()->json($result);
  }

  public function update($id, Request $request)
  {
    $address   = Address::find($id);
    $rules      = $address->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $address->update($input);
    $address->save();
    return $address;
  }
}
