<?php

namespace App\Http\Controllers\Sale;

use Auth;
use App\User;
use App\Models\Invoice;
use App\Http\Requests;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }
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

    $rules        = $invoiceModel->getValidatorRules();
    $validator    = $this->validate($request, $rules);
    if ($validator) {
      return response()->json($validator,'404');
    }
    /**
     |-----------------------------------------------------
     | Create a invoice
     |-----------------------------------------------------
     */
    $invoice      = $invoiceModel->create($request->all());
    /**
     |-----------------------------------------------------
     | Add customer to invoice
     |-----------------------------------------------------
     */
    $customer_id  = $request->get('customer')['id'];
    $customer     = Customer::find($customer_id);
    $invoice->updateCustomerWithShippingAddress($customer);
    /**
     |-----------------------------------------------------
     | Update saler
     |-----------------------------------------------------
     */
    /**
     |-----------------------------------------------------
     | Add list products to invoice
     |-----------------------------------------------------
     */
    $invoice->addProductItems($request->get('items'));
    /**
     |-----------------------------------------------------
     | Save to Db
     |-----------------------------------------------------
     */
    $invoice->save();

    return $invoice;
  }
}
