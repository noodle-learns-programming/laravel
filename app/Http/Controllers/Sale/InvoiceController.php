<?php

namespace App\Http\Controllers\Sale;

use App\User;
use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
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
    $invoices = Invoice::paginate(10);
    return $invoices;
  }

  public function show($id)
  {
    $invoice = Invoice::find($id);
    return $invoice;
  }

  public function store(Request $request)
  {
    $invoice    = new Invoice();
    $rules      = $invoice->getValidatorRules();
    $validator  = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $result     = $invoice->create($request->all());

    return response()->json([
      'result' => $result
    ]);
  }
}
