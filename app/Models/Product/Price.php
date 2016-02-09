<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
  const PRICE_SALE_TYPE   = 1;
  const PRICE_IMPORT_TYPE = 2;
  protected $table = 'product_prices';

  protected $fillable = [
    'price',
    'is_active',
    'created_user_id',
    'price_type'
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

  /**
   * Scope a query to only include active users.
   *
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function scopeActive($query)
  {
      return $query->where('is_active', 1);
  }

  /**
   * Scope a query to only include active users.
   *
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function scopeSaleType($query)
  {
      return $query->where('price_type', Price::PRICE_SALE_TYPE);
  }

  /**
   * Scope a query to only include active users.
   *
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function scopeImportType($query)
  {
      return $query->where('price_type', Price::PRICE_IMPORT_TYPE);
  }
}
