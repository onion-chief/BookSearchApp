<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SearchHistoryDetail extends Model
{
    use HasFactory;

    protected $table='search_history_detail';

    public function searchHistory() {
        return $this->belogsTo(SearchHistory::class);
    }
}
