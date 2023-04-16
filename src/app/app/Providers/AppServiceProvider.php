<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Domain\Repository\ISearchHistoryRepository;
use App\Repository\SearchHistoryRepository;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        ISearchHistoryRepository::class => SearchHistoryRepository::class
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
