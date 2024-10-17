<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_objects', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->comment('Название типа объекта');
            $table->string('description', 255)->nullable()->comment('Описание типа объекта');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_objects');
    }
};
