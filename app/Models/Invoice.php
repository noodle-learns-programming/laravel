<?php

namespace App\Models;

use App\Models\Invoice\Item;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
  const STATE_DRAFT           = 0;
  const STATE_VALID           = 1;
  const STATE_PENDING         = 2;
  const STATE_REFUND          = 4;
  const STATE_DELIVERY        = 8;
  const STATE_DELIVERY_FAILED = 16;

  protected $fillable = [
    'id',
    'customer_id',
    'sale_user_id',
    'invoice_state',
    'invoice_status',
    'payment_total',
    'payment_discount',
    'payment_net',
    'payment_type',
    'payment_status',
    'transfer_id',
    'buy_at_store',
    'ship_address_id',
    'note'
  ];

  public function getValidatorRules()
  {
    return [
      'customer' => 'required'
    ];
  }

  public function customer()
  {
    return $this->belongsTo('App\Models\Customer');
  }

  public function updateCustomerWithShippingAddress(App\Models\Customer $customer)
  {
    $this->customer()->associate($customer);

    if( $customer->getActiceShippingAddress() ) {
      $this->ship_address_id = $customer->getActiceShippingAddress()->id;
    }
    return this;
  }

  public function updateSaler(App\User $user)
  {
    $this->sale_user_id = $user->id;
  }

  public function items()
  {
    return $this->hasMany('App\Models\Invoice\Item');
  }

  public function addProductItems(array $arrItems = [])
  {
    foreach($arrItems as $itemData)
    {
      $item    = new Item($itemData);
      $product = Product::find($itemData['id']);
      $item->product()->associate($product);
      /**
       |----------------------------------------------
       | There are two ways to add item to an invoice.
       | 1. $this->items()->save($item);
       | 2. $item->invoice()->associate($this);
       |    $item->save();
       |----------------------------------------------
       */
      $this->items()->save($item);
      /***********************************************/
      // $item->invoice()->associate($this);
      // $item->save();
    }
    return $this;
  }
}
