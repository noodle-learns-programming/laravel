<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(App\Models\Product::class, 100)->create()->each(function($p){
      $p->save();
    });
  }
}
