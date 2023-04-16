<?php
namespace App\Service;

use App\Facade\GoogleBooksAPIFacade;
use App\Domain\DTO\Book;
use App\Domain\Repository\ISearchHistoryRepository;

class BookSearchAppService {
    private $searchHistoryRepo;

    public function __construct(ISearchHistoryRepository $searchHistoryRepo)
    {
        $this->searchHistoryRepo = $searchHistoryRepo;
    }


    public function search($keyword, $page, $isPagenate) {
        $response = GoogleBooksAPIFacade::search($keyword, $page, config('const.books_per_page'));

        $bookList = [];
        foreach (($response['items'] ?? []) as $item) {
            $bookList[] = new Book(
                $item['volumeInfo']['title'] ?? '',
                $item['volumeInfo']['authors'] ?? [],
                $item['volumeInfo']['description'] ?? '',
                $item['volumeInfo']['infoLink'] ?? '',
                $item['volumeInfo']['imageLinks']['smallThumbnail'] ?? ''
            );
        }

        if (!$isPagenate) {
            $this->searchHistoryRepo->addSearchHistory($keyword, $bookList);
        }

        return $bookList;
    }

    public function getHistory() {
        $historyList = $this->searchHistoryRepo->get(config('const.histories_per_page'));

        return $historyList;
    }
}