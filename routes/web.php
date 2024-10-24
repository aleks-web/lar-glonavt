<?php

use Illuminate\Support\Facades\Route;


Route::get('/test', function () {

})->middleware(\App\Http\Middleware\Api::class);
