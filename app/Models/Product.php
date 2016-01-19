<?php

namespace App\Models;

use App\Models\Product\Price;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = [
    'name',
    'description',
    'sku',
    'series',
    'unit',
    'brand_id',
    'supplier_id',
    'is_active',
    'image',
    'created_at',
    'updated_at'
  ];

  public function getValidatorRules()
  {
    return [
      'name' => 'required'
    ];
  }

  public function prices()
  {
    return $this->hasMany('App\Models\Product\Price');
  }

  public function price()
  {
    $prices = $this->prices()->where('is_active', '=', 1)->get();

    if( $prices->count() > 1 ) {
      throw new \Exception('Price of product can not have more than one active price value. Product: '. $this->id);
    }
    return $prices->first()->price;
  }

  public function toArray()
  {
    $value = parent::toArray();
    $value['price'] = $this->price();
    return $value; 
  }
}
