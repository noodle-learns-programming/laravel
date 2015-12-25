<?php

namespace App\Http\Controllers\Product;

use App\User;
use Validator;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return Response
     */
    public function create()
    {
        return view('product.create');
    }
}
