<?php

namespace App\Http\Controllers\API;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Service\BookSearchAppService;

class APIController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct(private BookSearchAppService $bookSearchAppService)
    {}

    public function search(Request $request) {
        $request->validate([
            'keyword' => 'string|nullable',
            'page' => 'required|integer',
            'isPagenate' =>'required|boolean'
        ]);
        $keyword = $request->input('keyword', '');
        $page = $request->input('page', 1);
        $isPagenate = $request->boolean('isPagenate', false);

        $response = $this->bookSearchAppService->search($keyword, $page, $isPagenate);

        return $response;
    }

    public function getHistory(Request $request) {
        $response = $this->bookSearchAppService->getHistory();

        return $response;
    }
}
