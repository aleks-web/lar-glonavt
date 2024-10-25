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
        /*
         * Start Seed BookDepartament
         * */
        $bookDepartaments = [
            [
                'name' => 'IT',
                'description' => 'Отдел IT',
            ],
            [
                'name' => 'Бухгалтерия',
                'description' => 'Отдел бухгалтерии',
            ],
        ];
        foreach ($bookDepartaments as $departement) {
            \App\Models\BookDepartment::create($departement);
        }

        /*
         * Start Seed BookPost
         * */
        $bookPosts = [
            [
                'name' => 'Разработчик ПО',
                'description' => 'Разработчик ПО',
                'department_id' => 1,
            ],
            [
                'name' => 'Главный разработчик',
                'description' => 'Главный разработчик',
                'department_id' => 1,
            ],
            [
                'name' => 'Главный бухгалтер',
                'description' => 'Главный бухгалтер',
                'department_id' => 2,
            ],
        ];
        foreach ($bookPosts as $post) {
            \App\Models\BookPost::create($post);
        }


        /*
         * Start Seed BookEquipment
         * */
        $bookEquipments = [
            [
                'name' => 'Оборудование 1',
            ],
            [
                'name' => 'Оборудование 2',
            ],
        ];
        foreach ($bookEquipments as $equipment) {
            \App\Models\BookEquipment::create($equipment);
        }

        /*
         * Start Seed BookObject
         * */
        $bookObjects = [
            [
                'name' => 'Оборудование 1',
            ],
            [
                'name' => 'Оборудование 2',
            ],
        ];
        foreach ($bookObjects as $object) {
            \App\Models\BookObject::create($object);
        }

        /*
         * Start Seed BookDoc
         * */
        $bookDoc = [
            [
                'name' => 'Тип документа 1',
            ],
            [
                'name' => 'Тип документа 2',
            ],
        ];
        foreach ($bookDoc as $doc) {
            \App\Models\BookDoc::create($doc);
        }

        $users = [
            [
                'name' => 'Алексей',
                'password' => 'admin',
                'email' => 'dok.go@yandex.ru',
                'post_id' => 1,
                'tel' => '+7 919 579 8871'
            ],
        ];
        foreach ($users as $user) {
            \App\Models\User::create($user);
        }

        $clients = [
            [
                'name' => 'Компания 1',
            ],
            [
                'name' => 'Компания 2',
            ],
        ];
        foreach ($clients as $client) {
            \App\Models\Client::create($client);
        }
    }
}
