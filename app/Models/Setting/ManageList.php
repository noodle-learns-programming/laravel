<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Model;

class ManageList extends Model
{
  protected $table = 'settings_manage_list';

  protected $casts = [
    'user_id'     => 'integer',
    'is_default'  => 'integer',
    'is_system'   => 'integer',
    'order'       => 'integer'
  ];

  protected $fillable = [
    'name',
    'description',
    'category',
    'value',
    'is_default',
    'is_system',
    'user_id',
    'order'
  ];

  public function getValidatorRules()
  {
    return [
      'name'      => 'required',
      'category'  => 'required',
      'value'     => 'required'
    ];
  }
}
