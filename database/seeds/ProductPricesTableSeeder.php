<?php

use Illuminate\Database\Seeder;

class ProductPricesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    App\Models\Product::paginate(300)->each(function($p) {
      $rand = rand(0, 3);
      for($i = 0; $i < $rand; $i++){
        $p->prices()->save(factory(App\Models\Product\Price::class)->make());
      }
    });
  }
}
