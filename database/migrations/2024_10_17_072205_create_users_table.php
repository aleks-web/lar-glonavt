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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->comment('Имя пользователя');
            $table->string('surname', 60)->nullable()->comment('Фамилия пользователя');
            $table->string('patronymic', 60)->nullable()->comment('Отчество пользователя');
            $table->integer('status')->nullable()->comment('Статус пользователя');
            $table->bigInteger('post_id')->nullable()->unsigned()->comment('Должность');
            $table->foreign('post_id')->references('id')->on('book_posts')->onDelete('set null');
            $table->string('tel', 15)->nullable();
            $table->string('email', 50)->nullable();
            $table->date('birth')->nullable()->comment('День рождения');
            $table->string('avatar_file_name', 255)->nullable()->comment('Файл аватарки');
            $table->string('password')->comment('Пароль');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
