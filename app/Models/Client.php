<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'status',
        'inn',
        'legal_address',
        'actual_address',
        'bank_name',
        'bic',
        'checking_bill_num',
        'correspondent_bill_num',
        'okpo',
        'okato',
        'manager_id'
    ];
}
