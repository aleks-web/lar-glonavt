<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\BookDepartment::factory(10)->create();

        \App\Models\BookPost::create(array(
            'name'  => 'Тестовый пост',
            'department_id' => 1,
            'description'   => 'Описание тестового поста'
        ));

    }
}
