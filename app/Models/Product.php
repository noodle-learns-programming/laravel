<?php

namespace App\Models;

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
}
