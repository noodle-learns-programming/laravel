<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
  protected $table = 'addresses';

  protected $fillable = [
    'address',
    'customer_id'
  ];

  public function getValidatorRules()
  {
    return [
      'address'     => 'required',
      'customer_id' => 'required'
    ];
  }
}
