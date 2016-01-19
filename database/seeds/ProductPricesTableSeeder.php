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
      $rand = rand(1, 3);
      for($i = 0; $i < $rand; $i++){
        $values = factory(App\Models\Product\Price::class)->make();
        $values['is_active'] = $i === 0;
        $p->prices()->save($values);
      }
    });
  }
}
