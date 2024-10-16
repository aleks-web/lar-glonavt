<?php

use Illuminate\Support\Facades\Route;

use App\Models\BookDepartments;

Route::get('/', function () {
    return view('welcome');
});
