<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SearchHistory extends Model
{
    use HasFactory;

    protected $casts = [
        'search_date' => 'datetime:Carbon'
    ];

    protected $table='search_history';
    
    public function searchHistoryDetails() {
        return $this->hasMany(SearchHistoryDetail::class);
    }
}
