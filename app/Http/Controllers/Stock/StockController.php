<?php

namespace App\Http\Controllers\Stock;

use App\User;
use App\Models\Stock;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StockController extends Controller
{
  public function index(Request $request)
  {
    return Stock::get();
  }
}
