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
        Schema::create('book_equipment', function (Blueprint $table) {
            $table->id();
            $table->integer('status')->nullable()->comment('Статус оборудования');
            $table->string('name', 255)->comment('Название оборудования');
            $table->json('field_properties')->nullable()->comment('Характеристики полей оборудования');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_equipment');
    }
};
