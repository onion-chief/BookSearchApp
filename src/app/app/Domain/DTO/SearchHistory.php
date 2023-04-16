<?php
namespace App\Domain\DTO;

use JsonSerializable;

class SearchHistory implements jsonSerializable{
    private $bookList;
    private $keyword;
    private $searchDate;

    public function __construct($keyword, $searchDate, $bookList) {
        $this->keyword = $keyword ?? '';
        $this->searchDate = $searchDate ?? null;
        $this->bookList = $bookList ?? [];
    }

    public function getKeyword() 
    {
        return $this->keyword;
    }

    public function getBookList()
    {
        return $this->bookList;
    }

    public function getSearchDate()
    {
        return $this->searchDate->format('Y/m/d H:i:s');
    }

    public function jsonSerialize(): mixed
    {
        return [
            'searchKeyword' => $this->getKeyword(),
            'searchDate' => $this->getSearchDate(),
            'bookList' => $this->getBookList()
        ];
    }
}