<?php
namespace App\Facade;

use Illuminate\Support\Facades\Http;

class GoogleBooksAPIFacade
{
    public static function search($keyword, $page) {
        if (is_null($keyword) || is_null($page)) {
            return [];
        }

        $query['q'] = urlencode($keyword);
        $query['maxResults'] = 10;
        $query['startIndex'] = 10 * $page;
        $endPoint = "https://www.googleapis.com/books/v1/volumes";
        
        $response = Http::get($endPoint, $query);
        return $response->json();
    }
}