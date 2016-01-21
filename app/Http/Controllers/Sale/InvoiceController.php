<?php

namespace App\Http\Controllers\Sale;

use App\User;
use App\Models\Invoice;
use App\Models\Customer;
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
    $data = $invoice->toArray();
    $data['customer']   = $invoice->customer->toArray();
    $data['addresses']  = $invoice->addresses->toArray();
    return $data;
  }

  public function store(Request $request)
  {
    $invoiceModel = new Invoice();
    $customer_id  = $request->get('customer')['id'];
    $customer     = Customer::find($customer_id);

    $rules        = $invoiceModel->getValidatorRules();
    $validator    = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    $invoice      = $invoiceModel->create($request->all());
    $invoice->customer()->associate($customer);
    if( $customer->getActiceShippingAddress() ) {
      $invoice->ship_address_id = $customer->getActiceShippingAddress()->id;
    }


    return response()->json([
      'result' => $invoice
    ]);
  }
}
