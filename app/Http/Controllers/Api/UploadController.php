<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Search;

class UploadController extends Controller
{
  public function store(Request $request)
  {
    $file   = $request->file('file');
    $type   = $request->get('type');
    $path   = 'upload';
    if( $type === 'customer' ){
      $path   = 'upload/customer';
    }
    if (!$file->isValid()) {
      return response()->json([
        'message' => 'The file is invalid'
      ],'404');
    }
    $filename = time().'.'.$file->getClientOriginalExtension();
    $file->move(public_path($path), $filename);
    return [
      'path'      => $path,
      'filename'  => $filename
    ];
  }
}
