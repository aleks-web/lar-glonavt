<template>
    <div class="modal modal--small" :class="{open: isOpen}">
        <svg @click="closeModal" class="modal__close"><use xlink:href="#svg-close"></use></svg>

        <div class="modal__container">
            <div class="modal__title">Новый клиент</div>

            <div style="display: flex; column-gap: 2.5rem;">
                <div style="display: flex;flex-direction: column;gap: 30px;">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; row-gap: 20px;">
                        <InputText pls="Введите ИНН" v-model="newClient.inn" />
                        <InputText pls="Введите БИК" v-model="newClient.bic" />
                    </div>

                    <InputText pls="Название организации" v-model="newClient.name" :error="newClientErrors.name" required />

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; row-gap: 20px;">
                        <Textarea pls="Фактический адрес" v-model="newClient.actual_address" />
                        <Textarea pls="Юредический адрес" v-model="newClient.legal_address" />
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr; gap: 30px; column-gap: 2.5rem;">
                        <div>
                            <div style="font-size: 1.1rem;font-weight: bold;color: var(--clr-6);margin-bottom: 15px;">Банковские реквизиты</div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <InputText pls="Название банка" v-model="newClient.bank_name" />
                                <InputText pls="Рассчётный счёт" v-model="newClient.checking_bill_num" />
                                <InputText pls="Корреспондентский счёт" v-model="newClient.correspondent_bill_num" />
                                <InputText pls="ОКАТО" v-model="newClient.okato" />
                                <InputText pls="ОКПО" v-model="newClient.okpo" />
                            </div>
                        </div>

                        <div>
                            <div style="font-size: 1.1rem;font-weight: bold;color: var(--clr-6);margin-bottom: 15px;">Ответственный менеджер</div>

                            <div style="display: flex;flex-direction: column; gap: 20px;">
                                <SimpleSelect :error="newClientErrors.manager_id"
                                              pls="Ответственный менеджер"
                                              val="1"
                                              :selects="[{id: 1, name: 'Тест'}, {id: 2, name: 'Тест 2'}]"
                                              v-model="newClient.manager_id"
                                              targetId="id"
                                              targetName="name" />
                            </div>
                        </div>
                    </div>

<!--                    <div>-->
<!--                        <div style="display: flex;justify-content: space-between;">-->
<!--                            <div style="font-size: 1.1rem;font-weight: bold;color: var(&#45;&#45;clr-6);margin-bottom: 15px;">Контактные лица</div>-->
<!--                            <button class="btn">Добавить</button>-->
<!--                        </div>-->

<!--                        <table>-->
<!--                            <thead>-->
<!--                                <tr>-->
<!--                                    <th class="text-start">ФИО</th>-->
<!--                                    <th>Email</th>-->
<!--                                    <th>Телефон</th>-->
<!--                                </tr>-->
<!--                            </thead>-->

<!--                            <tbody>-->
<!--                                <tr class="pointer">-->
<!--                                    <td class="text-start">Алексей</td>-->
<!--                                    <td>dok.go@yandex.ru</td>-->
<!--                                    <td>+7 919 579 88 71</td>-->
<!--                                </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
<!--                    </div>-->
                </div>

                <div style="display: flex;justify-content: space-between;flex-direction: column">
                    <button class="btn">Проверить</button>
                    <button class="btn" @click="createNewClient" style="font-weight: 700; width: max-content;">Сохранить</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent, ref, getCurrentInstance, watch, reactive} from "vue";
import {usedModalsStore} from "@/stores/modals.js";
import {useClientsStore} from "@/stores/clients.js";
import {globalUtil} from "@/utils/globalUtil.js";
import InputText from "@/components/ui/Input.vue";
import Textarea from "@/components/ui/Textarea.vue";
import SimpleSelect from "@/components/ui/SimpleSelect.vue";

export default defineComponent({
    name: "ModalClientAdd",
    components: {SimpleSelect, Textarea, InputText},
    setup() {
        const modalsStore = usedModalsStore();
        const currentInstance = getCurrentInstance();
        const clientStore = useClientsStore();
        let newClient = reactive({});
        let newClientErrors = ref({});

        const {api} = globalUtil();

        /*
        * Открытие/закрытие модального окна
        * */
        let isOpen = ref(modalsStore.modals.ModalClientAdd === '');

        const closeModal = () => {
            isOpen.value = modalsStore.removeModalById('ModalClientAdd');
        }

        watch(isOpen, (newIsOpen, oldIsOpen) => {
            if (newIsOpen) {
                modalsStore.modals[currentInstance.type.name] = currentInstance.type;
            }

            if (!newIsOpen) {
                modalsStore.removeModalById(currentInstance.type.name);
            }
        });

        function createNewClient() {
            api.Clients.createClient(newClient).then(r => {
                clientStore.clients.push(r);
                closeModal();
                newClientErrors.value = {};

                Object.keys(newClient).forEach(key => {
                    delete newClient[key];
                });
            }).catch(err => {
                if (err.status == 422) {
                    let er = err.response.data.errors;

                    Object.entries(er).forEach(i => {
                        let fieldName = i[0];
                        let fieldArrayErrors = i[1];

                        fieldArrayErrors.forEach((er, k) => {
                            newClientErrors.value[fieldName] = er;
                        });

                    });
                }
            });
        }

        watch(newClient, (n, o) => {
           console.log(n);
        });


        return {
            isOpen,
            newClient,
            newClientErrors,
            createNewClient,
            closeModal
        }
    }
});
</script>

<style lang="less">

</style>
