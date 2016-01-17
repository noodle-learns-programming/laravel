<?php

use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(App\Models\Customer::class, 50)->create()->each(function($u) {
      $u->addresses()->save(factory(App\Models\Address::class)->make());
    });
  }
}
