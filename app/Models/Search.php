<?php

namespace App\Models;

use \DB;

class Search
{
	public function search($q = '', $type = 'brand')
	{
		$result = DB::table('brands')
	        ->where('name', 'like', '%'.$q.'%')
	        ->get();
	    return $result;
	}
}