<?php

use Illuminate\Database\Seeder;

class StocksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Models\Stock::insert([
          'name'    => 'Tan Binh',
          'address' => 'Sai Gon'
        ]);
        App\Models\Stock::insert([
          'name'    => 'Quan 7',
          'address' => 'Sai Gon'
        ]);
        App\Models\Stock::insert([
          'name'  => 'Da Nang',
          'address' => 'Da Nang'
        ]);
        App\Models\Stock::insert([
          'name'  => 'Ha Noi',
          'address'  => 'Ha Noi'
        ]);
        App\Models\Stock::insert([
          'name'  => 'Can Tho',
          'address'  => 'Can Tho'
        ]);
    }
}
