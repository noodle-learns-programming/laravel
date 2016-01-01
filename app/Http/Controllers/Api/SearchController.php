<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Search;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $type   = $request->get('type');
        $q      = $request->get('q');

        $search = new Search;

        return [
            'type' => $type,
            'items'=> $search->search($q, $type)
        ];
    }
}
