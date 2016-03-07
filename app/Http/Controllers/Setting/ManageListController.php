<?php

namespace App\Http\Controllers\Setting;

use Auth;
use App\User;
use App\Models\Setting\ManageList;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ManageListController extends Controller
{
  public function index()
  {
    $manageList = ManageList::paginate(10);
    return $manageList;
  }

  public function show($id)
  {
    $manageList = ManageList::find($id);
    $data = $manageList->toArray();
    return $data;
  }

  public function store(Request $request)
  {
    $manageList = new ManageList();
    $rules      = $manageList->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    $result   = $manageList->updateOrCreate([
      'mobile_phone' => $input['mobile_phone']
    ],$input);

    return $result;
  }

  public function update($id, Request $request)
  {
    $manageList = ManageList::find($id);
    $rules      = $manageList->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $input    = $request->all();
    if( isset($input['image']) && empty($input['image']) ) {
      unset($input['image']);
    }
    $manageList->update($input);
    $manageList->save();
    return $manageList;
  }

  public function getSearch(Request $request)
  {
    $q          = $request->get('q');
    $limit      = $request->get('limit', 5);
    $manageList = ManageList::where('mobile_phone', 'like', $q.'%')
    ->with('addresses')
    ->paginate($limit);
    return $customers;
  }
}
