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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->unique()->comment('Название клиента');
            $table->integer('status')->nullable()->comment('Статус');
            $table->string('inn', 50)->nullable()->comment('ИНН компании');
            $table->string('legal_address', 355)->nullable()->comment('Юридический адрес');
            $table->string('actual_address', 355)->nullable()->comment('Фактический адрес');
            $table->string('bank_name')->nullable()->comment('Название банка');
            $table->string('bic', 50)->nullable()->comment('БИК банка');
            $table->string('checking_bill_num', 100)->nullable()->comment('Номер рассчетного счета');
            $table->string('correspondent_bill_num', 100)->nullable()->comment('Номер корреспондентского счета');
            $table->string('okpo', 100)->nullable()->comment('Номер ОКПО');
            $table->string('okato', 100)->nullable()->comment('Номер окато');
            $table->bigInteger('manager_id')->unsigned()->nullable()->comment('Менеджер');
            $table->foreign('manager_id')->references('id')->on('users')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
