<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index() {
        return Client::all();
    }

    public function show($id) : Client {
        return Client::find($id);
    }

    public function store() {}
}
