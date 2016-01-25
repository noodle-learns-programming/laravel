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
    'address',
    'image',
    'description',
    'job',
    'education'
  ];

  public function getValidatorRules()
  {
    return [
      'name'          => 'required',
      'mobile_phone'  => 'required'
    ];
  }

  public function addresses()
  {
    return $this->hasMany('App\Models\Address');
  }
  
  /**
   * Get active shipping address of a customer
   * @return Customer
   */
  public function getActiceShippingAddress()
  {
    $addresses = $this->addresses()->where('is_active', '=', 1)->get();

    if( $addresses->count() > 1 ) {
      throw new \Exception('A customer should not have two active addresses. Customer: '. $this->id);
    }
    return $addresses->first();
  }
}
