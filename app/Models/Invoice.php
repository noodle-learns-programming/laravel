<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
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
      'customer_id' => 'required'
    ];
  }

  public function customer()
  {
    return $this->belongsTo('App\Models\Customer');
  }
}
