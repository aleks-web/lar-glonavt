<?php

use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => [App\Http\Middleware\Api::class],
], function ($router) {
    Route::resource('client', ClientController::class);
});


/*
 * Авторизация
 * */
Route::group([

    'middleware' => [App\Http\Middleware\Api::class],
    'namespace' => 'App\Http\Controllers\API',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

});
