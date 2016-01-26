<?php

use Illuminate\Database\Seeder;

class ProductUnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrUnits = [
          'Cái',
          'Chai',
          'Thỏi',
          'Lọ',
          'Hủ',
          'Gói',
          'Kiện',
          'Thùng'
        ];
        foreach($arrUnits as $unit)
        {
          App\Models\Product\Unit::insert([
            'name'    => $unit
          ]);  
        }
    }
}
