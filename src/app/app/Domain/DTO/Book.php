<?php
namespace App\Domain\DTO;

use JsonSerializable;

class Book implements JsonSerializable {
    private $title;
    private $authors;
    private $description;
    private $infoLinkURL;
    private $smallThumbnailURL;

    public function __construct($title, $authors, $description, $infoLinkURL, $smallThumbnail) {
        $this->title = $title ?? '';
        $this->authors = collect($authors ?? []);
        $this->description = $description ?? '';
        $this->infoLinkURL = $infoLinkURL ?? '';
        $this->smallThumbnailURL = $smallThumbnail ?? '';
    }

    public function getTitle() {
        return $this->title;
    }

    public function getAuthors() {
        return $this->authors->join(',');
    }

    public function getDescription() {
        return $this->description;
    }

    public function getInfoLinkURL() {
        return $this->infoLinkURL;
    }

    public function getSmallThumbnailURL() {
        return $this->smallThumbnailURL;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'title' => $this->getTitle(),
            'authors' => $this->getAuthors(),
            'description' => $this->getDescription(),
            'infoLinkURL' => $this->getInfoLinkURL(),
            'smallThumbnail' => $this->getSmallThumbnailURL()
        ];
    }
}