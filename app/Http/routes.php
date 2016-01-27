<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
  Route::auth();
  Route::get('/', 'HomeController@index');
  Route::get('/home', 'HomeController@index');
});

Route::group(['namespace' => 'Api', 'prefix' => 'api'], function()
{
  Route::resource('search', 'SearchController');
  Route::resource('upload', 'UploadController');
});

Route::group(['namespace' => 'Stock', 'prefix' => 'stock'], function()
{
  Route::put('product/price', 'ProductController@setPrice');
	Route::resource('product', 'ProductController');
  Route::resource('stock', 'StockController');
  Route::resource('unit', 'Product\UnitController');
});

Route::group([
  'middleware' => ['web'], 
  'namespace'  => 'Sale',
  'prefix'     => 'sale'], function()
{
  Route::get('customer/search', 'CustomerController@getSearch');
  Route::resource('customer', 'CustomerController');
  Route::resource('address', 'AddressController');
  Route::resource('invoice', 'InvoiceController');
});

