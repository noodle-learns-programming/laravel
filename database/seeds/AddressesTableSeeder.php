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
    App\Models\Customer::paginate(300)->each(function($u) {
      $rand = rand(0, 3);
      for($i = 0; $i < $rand; $i++){
        $u->addresses()->save(factory(App\Models\Address::class)->make());
      }
    });
  }
}
