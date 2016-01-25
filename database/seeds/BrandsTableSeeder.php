<?php

use Illuminate\Database\Seeder;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      App\Models\Brand::insert([
        'name'  => 'Sony'
      ]);
      App\Models\Brand::insert([
        'name'  => 'Samsung'
      ]);
      App\Models\Brand::insert([
        'name'  => 'P&G'
      ]);
      App\Models\Brand::insert([
        'name'  => 'Unilever'
      ]);
    }
}
