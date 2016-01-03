<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
  protected $fillable = [
    'name',
    'gender',
    'dob',
    'email',
    'home_phone',
    'mobile_phone',
    'image',
    'description',
    'job',
    'education'
  ];

  public function getValidatorRules()
  {
    return [
      'name'          => 'required',
      'gender'        => 'required',
      'mobile_phone'  => 'required'
    ];
  }
}
