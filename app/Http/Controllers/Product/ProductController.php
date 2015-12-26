<?php

namespace App\Http\Controllers\Product;

use App\Product;
use App\User;
use Illuminate\Http\Request;
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

    public function index()
    {
    	return view('product.create');	
    }

    public function store(Request $request)
    {
    	$rules = array(
            'name'       	=> 'required'
        );
     	$validator = $this->validate($request, $rules);
     	if ($validator) {
            return redirect('product/create')
                ->withErrors($validator)
                ->withInput();
        }
        $nerd = new Product;
        $nerd->name       = $request->get('name');
        $nerd->description      = $request->get('description');
        $nerd->save();
        
        return redirect('product');
    }
}
