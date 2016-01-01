<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = array('name', 'description', 'sku', 'series', 'unit', 'brand', 'image', 'created_at', 'updated_at');
}
