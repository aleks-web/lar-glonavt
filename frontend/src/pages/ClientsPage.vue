<template>
    <div class="control">
        <div class="control__container">
            <div class="control__left">
                <div class="control__search input-search" style="max-width: 380px; ">
                    <input type="text" name="name_or_inn" class="input-search__input" placeholder="Поиск по наименованию или ИНН">
                </div>
            </div>

            <div class="control__right">
                <button class="control__btn btn" @click="openModalClientAdd">Добавить</button>
            </div>
        </div>
    </div>

    <div id="region-main-table">
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

                        <tr class="pointer" v-for="client in clients" :key="client.id">
                            <td class="text-start">{{ client.id }}</td>
                            <td class="text-start">Активный</td>

                            <td v-if="client.name && client.inn" class="text-start">
                                {{ client.name }}
                                <br><span class="text-secondary">ИНН: {{ client.inn || '-' }}</span>
                            </td>

                            <td v-else class="text-start">
                                {{ client.name || '-'}}
                            </td>

                            <td>2</td>
                            <td class="text-start">3</td>
                            <td>Антропов А. А.</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <ModalClientAdd ref="ModalClientAdd" />
</template>

<script>
import {defineComponent, onMounted, ref, useTemplateRef} from "vue";
import {globalUtil} from "@/utils/globalUtil.js";
import ModalClientAdd from "@/components/modals/Clients/ModalClientAdd.vue";

export default defineComponent({
    name: "ClientsPage",
    components: {ModalClientAdd},
    setup() {
        const {api} = globalUtil();
        const ModalClientAdd = useTemplateRef('ModalClientAdd');

        const openModalClientAdd = () => {
            ModalClientAdd.value.isOpen = ModalClientAdd.value.isOpen ? false : true;
        }

        onMounted( () => {
            getClients();
        });

        let clients = ref([]);
        const getClients = async () => {
            clients.value = await api.Clients.getClients();
        }

        return {
            clients,
            openModalClientAdd
        };
    }
});
</script>
