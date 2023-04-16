<?php
namespace App\Domain\Repository;

interface ISearchHistoryRepository {
    public function get($booksPerPage);
    public function addSearchHistory($keyword, $bookList);
}