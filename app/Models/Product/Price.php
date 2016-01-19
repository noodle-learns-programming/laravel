<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
  protected $table = 'product_prices';

  protected $fillable = [
    'price'
  ];

  public function getValidatorRules()
  {
    return [
      'price' => 'required'
    ];
  }

  public function product()
  {
    return $this->belongsTo('App\Models\Product');
  }
}
