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
    	'brand',
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
