<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
  return [
    'name'           => $faker->name,
    'email'          => $faker->email,
    'password'       => bcrypt(str_random(10)),
    'remember_token' => str_random(10),
  ];
});

$factory->define(App\Models\Customer::class, function (Faker\Generator $faker) {
  return [
    'name'         => $faker->name,
    'email'        => $faker->email,
    'address'      => $faker->address,
    'mobile_phone' => $faker->phoneNumber,
    'home_phone'   => $faker->phoneNumber,
    'gender'       => $faker->randomElement($array = array ('1','2')),
    'dob'          => $faker->date($format = 'Y-m-d', $max = 'now'),
    'description'  => $faker->sentence($nbWords = 6, $variableNbWords = true)
  ];
});

$factory->define(App\Models\Address::class, function (Faker\Generator $faker) {
  return [
    'address'     => $faker->address,
    'is_active'   => 0
  ];
});

$factory->define(App\Models\Product::class, function (Faker\Generator $faker) {
  /*update products
  set brand_id = ROUND((RAND())*3 + 1)*/
  return [
    'name'        => $faker->name,
    'sku'         => $faker->ean13,
    'image'       => '',
    'brand_id'    => $faker->randomElement($array = array ('1', '2', '3', '4')),
    'supplier_id' => $faker->randomElement($array = array ('1', '2', '3', '4')),
    'is_active'   => $faker->randomElement($array = array ('0', '1')),
    'unit_id'     => $faker->randomElement($array = array ('1', '2', '3', '4')),
    'description' => $faker->sentence($nbWords = 6, $variableNbWords = true)
  ];
});

$factory->define(App\Models\Product\Price::class, function (Faker\Generator $faker) {
  return [
    'price'           => $faker->numberBetween($min = 1000, $max = 9000),
    'is_active'       => 0,
    'created_user_id' => 1
  ];
});
