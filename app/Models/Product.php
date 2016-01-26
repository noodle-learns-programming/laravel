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
    'unit_id',
    'brand_id',
    'stock_id',
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

  public function brand()
  {
    return $this->belongsTo('App\Models\Brand');
  }

  public function stock()
  {
    return $this->belongsTo('App\Models\Stock');
  }

  public function unit()
  {
    return $this->belongsTo('App\Models\Product\Unit');
  }

  public function toArray()
  {
    $value = parent::toArray();
    $value['price'] = $this->price();
    return $value; 
  }
}
