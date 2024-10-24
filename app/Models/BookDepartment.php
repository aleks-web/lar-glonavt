<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookDepartment extends Model
{
    use HasFactory;

    public function posts() {
        return $this->hasMany(BookPost::class);
    }

    public function users()
    {
        return $this->hasManyThrough(User::class, BookPost::class);
    }
}
