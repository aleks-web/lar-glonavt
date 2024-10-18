<template>
    <div class="control">
        <div class="control__container">
            <div class="control__left">
                <div class="control__search input-search" style="max-width: 380px; ">
                    <input type="text" name="name_or_inn" class="input-search__input" placeholder="Поиск по наименованию или ИНН">
                </div>
            </div>

            <div class="control__right">
                <button data-modal-client-add="" class="control__btn btn">Добавить</button>
            </div>
        </div>
    </div>

    <div id="region-main-table" class="">
        <div class="content-table content-table--control">
            <div class="content-table__container">
                <table>
                    <thead>
                        <tr>
                            <th class="text-start" style="width: 6%;">id</th>
                            <th class="text-start">Статус</th>
                            <th class="text-start">Наименование/ИНН</th>
                            <th>Кол-во объектов</th>
                            <th>Заявки</th>
                            <th>Менеджер</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr class="pointer">
                            <td class="text-start">1</td>
                            <td class="text-start">Активный</td>
                            <td class="text-start">Алексей IT<br><span class="text-secondary">ИНН: Инн</span></td>
                            <td>2</td>
                            <td class="text-start">3</td>
                            <td>Антропов А. А.</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {
            username: 'Вася'
        }
    }
});
</script>
