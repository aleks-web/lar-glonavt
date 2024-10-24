<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookPost extends Model
{
    use HasFactory;

    public function department()
    {
        return $this->belongsTo(BookDepartment::class);
    }

    public function users() {
        return $this->hasMany(User::class);
    }
}
