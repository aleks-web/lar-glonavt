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
        Schema::create('book_docs', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->comment('Название типа документа');
            $table->string('description', 255)->nullable()->comment('Описание типа документа');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_docs');
    }
};
