<?php

use Illuminate\Support\Facades\Route;

use App\Models\BookDepartment;

Route::get('{any?}', function () {
    return view('index');
})->where('any', '.*');
