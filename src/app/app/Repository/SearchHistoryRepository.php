<?php
namespace App\Repository;

use App\Models\SearchHistory;
use App\Domain\Repository\ISearchHistoryRepository;
use App\Domain\DTO\Book;
use App\Domain\DTO\SearchHistory as SearchHistoryDTO;
use App\Models\SearchHistoryDetail;
use Carbon\Carbon;

class SearchHistoryRepository implements ISearchHistoryRepository {
    public function get($booksPerPage) {
        $searchHistory = new SearchHistory();

        $histories = $searchHistory->with('searchHistoryDetails')->orderByDesc('id')->paginate($booksPerPage);

        $historyList = $histories->map(function ($item) {
            return $this->toSearchHistory($item);
        });

        return $historyList;
    }

    public function addSearchHistory($keyword, $bookList) {
        $searchHistory = new SearchHistory();

        $searchHistory->search_keyword = $keyword;
        $searchHistory->search_date = Carbon::now();

        $searchHistory->save();

        foreach ($bookList as $book) {
            $searchHistoryDetail = new SearchHistoryDetail();
            $searchHistoryDetail->title = $book->getTitle();
            $searchHistoryDetail->authors = $book->getAuthors();
            $searchHistoryDetail->infoURL = $book->getInfoLinkURL();
            $searchHistoryDetail->thumbnailURL = $book->getSmallThumbnailURL();
            $searchHistoryDetail->description = $book->getDescription();
            $searchHistoryDetail->search_history_id = $searchHistory->id;

            $searchHistoryDetail->save();
        }
    }

    private function toSearchHistory($item) {
        return new SearchHistoryDTO(
            $item->search_keyword,
            $item->search_date,
            $item->searchHistoryDetails->map(function ($item) {
                return $this->toBook($item);
            })
        );
    }

    private function toBook($item) {
        return new Book(
            $item->title,
            $item->authors,
            $item->description,
            $item->infoURL,
            $item->thumbnailURL
        );
    }
}