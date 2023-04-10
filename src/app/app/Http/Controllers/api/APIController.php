<?php

namespace App\Http\Controllers\Api;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Facade\GoogleBooksAPIFacade;

class APIController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function search(Request $request) {
        $keyword = $request->input('keyword', '');
        $page = $request->input('page', 0);
        $response = GoogleBooksAPIFacade::search($keyword, $page);
    
        return $response;
    }
}
