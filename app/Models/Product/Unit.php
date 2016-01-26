<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
  protected $table = 'product_units';

  protected $fillable = [
    'name'
  ];
}
