<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // $this->call(UserTableSeeder::class);
    factory(App\Models\Customer::class, 50)->make();
    //factory(App\Models\Product::class, 10)->make();
  }
}
