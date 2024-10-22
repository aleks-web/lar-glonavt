<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

use App\Models\User;

Route::get('/test', function () {
    $user = User::find(1);
    $token = auth('api')->login($user);

    dd($token);
});
