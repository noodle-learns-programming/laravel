<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
  protected $fillable = [
    'name',
    'gender',
    'date_of_birth',
    'home_phone',
    'mobile_phone',
    'avatar',
    'job',
    'education'
  ];

  public function getValidatorRules()
  {
    return [
      'name'          => 'required',
      'gender'        => 'required',
      'mobile_phone'  => 'required';
    ];
  }
}
