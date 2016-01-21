<?php

namespace App\Models\Invoice;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  protected $table = 'invoice_items';

  protected $fillable = [
    'invoice_id',
    'product_id',
    'quality',
    'price',
    'discount_value',
    'discount_type'
  ];

  public function getValidatorRules()
  {
    return [
      'invoice_id' => 'required',
      'product_id' => 'required',
      'quality'    => 'required'
    ];
  }

  public function invoice()
  {
    return $this->belongsTo('App\Models\Invoice');
  }

  public function product()
  {
    return $this->belongsTo('App\Models\Product');
  }  
}
