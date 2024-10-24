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


                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; row-gap: 20px;">
                        <InputText pls="Название организации" v-model="newClient.name" required />
                        <InputText pls="Фактический адрес" v-model="newClient.actual_address" />
                        <InputText pls="Юредический адрес" v-model="newClient.legal_address" />
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem;">
                        <div>
                            <div style="font-size: 1.1rem;font-weight: bold;color: var(--clr-6);margin-bottom: 15px;">Банковские реквизиты</div>

                            <div style="display: flex;flex-direction: column; gap: 20px;">
                                <InputText pls="Название банка" v-model="newClient.bank_name" />
                                <InputText pls="Рассчётный счёт" v-model="newClient.checking_bill_num" />
                                <InputText pls="Корреспондентский счёт" v-model="newClient.correspondent_bill_num" />
                                <InputText pls="ОКАТО" v-model="newClient.okato" />
                                <InputText pls="ОКПО" v-model="newClient.okpo" />
                            </div>
                        </div>
                    </div>
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
import {openedModalsStore} from "@/stores/modals.js";
import {useClientsStore} from "@/stores/clients.js";
import {globalUtil} from "@/utils/globalUtil.js";
import InputText from "@/components/ui/Input.vue";

export default defineComponent({
    name: "ModalClientAdd",
    components: {InputText},
    setup() {
        const openedModals = openedModalsStore();
        const currentInstance = getCurrentInstance();
        const clientStore = useClientsStore();
        const newClient = reactive({});

        const {api} = globalUtil();

        /*
        * Открытие/закрытие модального окна
        * */
        const isOpen = ref(false);
        const closeModal = () => {
            isOpen.value = false;
        }
        watch(isOpen, (newIsOpen, oldIsOpen) => {
            if (newIsOpen) {
                openedModals.modals[currentInstance.type.name] = currentInstance.type;
            }

            if (!newIsOpen) {
                openedModals.removeModalById(currentInstance.type.name);
            }
        });


        watch(newClient, (n, o) => {
            // console.log(n);
        })


        function createNewClient() {
            api.Clients.createClient(newClient).then(r => {
                clientStore.clients.push(r);

                openedModals.removeModalById('ModalClientAdd');
            }).catch(err => {

            });
        }


        return {
            isOpen,
            newClient,
            createNewClient,
            closeModal
        }
    }
});
</script>

<style lang="less">

</style>
