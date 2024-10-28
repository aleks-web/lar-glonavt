<template>
    <div id="modal-client" class="modal modal-client" :class="{open: isOpen}">
        <svg @click="closeModal" class="modal__close"><use xlink:href="#svg-close"></use></svg>

        <div class="modal__container">

            <div class="modal__header">
                <div class="modal__header-left">

                    <div class="modal__info">
                        <div class="modal__info-title">
                            <span class="modal__info-title-h1">ertert</span>
                            <span class="modal__info-title-h2">ИНН: ertert</span>
                        </div>
                    </div>

                </div>


                <div class="modal__header-right">
                    <div class="modal__header-group-btns">
                        <button class="modal__header-btn modal__header-btn-edit btn">Редактировать</button>
                        <button class="modal__header-btn modal__header-btn-save btn-good" style="display: none;">Сохранить</button>
                        <button class="modal__header-btn btn-bad">В архив</button>
                    </div>
                </div>
            </div>


            <div class="modal__main">

                <div class="tabs" data-outside="control">


                    <div class="tabs__header">
                        <div data-id="1" class="tabs__tab tabs__tab--active">
                            Информация
                        </div>
                        <div data-id="2" id="modal-client-tab-contacts-persons" class="tabs__tab">
                            Контактные лица
                        </div>
                        <div data-id="3" class="tabs__tab">
                            Объекты
                        </div>
                        <div data-id="4" class="tabs__tab">
                            Договоры
                        </div>
                        <div data-id="5" class="tabs__tab">
                            Счета
                        </div>
                        <div data-id="6" class="tabs__tab" style="color:red;">
                            Документы
                        </div>
                        <div data-id="7" class="tabs__tab" style="color:red;">
                            Заявки
                        </div>
                    </div>

                    <div class="tabs__content">
                        <div data-id="1" class="tabs__item tabs__item--active">

                            <div class="modal__data-view modal-client__data-view view">
                                <div class="block-info">
                                    <div class="block-info__title">О компании</div>

                                    <div class="block-info__content">
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Статус</span>
                                            <span class="block-info__text-main" style="color: red;">----</span>
                                        </div>

                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Наименование</span>
                                            <span class="block-info__text-main">{{ client.name || '-' }}</span>
                                        </div>

                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">ИНН</span>
                                            <span class="block-info__text-main">{{ client.inn || '-' }}</span>
                                        </div>

                                        <div class="block-info__item" v-if="client.actual_address">
                                            <span class="block-info__text-secondary">Фактический адрес</span>
                                            <span class="block-info__text-main">{{ client.actual_address || '-' }}</span>
                                        </div>

                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Юридический адрес</span>
                                            <span class="block-info__text-main">{{ client.legal_address || '-' }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="block-info">
                                    <div class="block-info__title">Банковские реквизиты</div>

                                    <div class="block-info__content">
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Наименование банка</span>
                                            <span class="block-info__text-main">{{ client.bank_name || '-' }}</span>
                                        </div>
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">БИК</span>
                                            <span class="block-info__text-main">{{ client.bic || '-' }}</span>
                                        </div>
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Рассчётный счёт</span>
                                            <span class="block-info__text-main">{{ client.checking_bill_num || '-' }}</span>
                                        </div>
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Корреспондентский счёт</span>
                                            <span class="block-info__text-main">{{ client.correspondent_bill_num || '-' }}</span>
                                        </div>
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">ОКПО</span>
                                            <span class="block-info__text-main">{{ client.okpo || '-' }}</span>
                                        </div>
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">ОКАТО</span>
                                            <span class="block-info__text-main">{{ client.okato || '-' }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="block-info">
                                    <div class="block-info__title">Ответственный менеджер</div>

                                    <div class="block-info__content">
                                        <div class="block-info__item">
                                            <span class="block-info__text-secondary">Менеджер</span>
                                            <span class="block-info__text-main">asdadasdasdas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal__data-edit modal-client__data-edit edit" style="display: none;">
                                <div class="block-info">
                                    <div class="block-info__title">О компании</div>

                                    asdasd
                                </div>

                                <div class="block-info">
                                    <div class="block-info__title">Банковские реквизиты</div>

                                    <div class="block-info__content">

                                        asdasdasdasdasd

                                    </div>
                                </div>

                                <div class="block-info">
                                    <div class="block-info__title">Руководитель</div>

                                    asdasdasdasdasd
                                </div>

                                <div class="block-info">
                                    <div class="block-info__title">Ответственный менеджер</div>

                                    <div class="block-info__content">
                                        <div class="block-info__item">
                                            asdasdasd
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div data-id="2" id="modal-client-tab-contacts-persons-content" class="tabs__item"></div>

                        <div data-id="3" id="modal-client-tab-objects-content" class="tabs__item"></div>

                        <div data-id="4" id="modal-client-tab-contracts-content" class="tabs__item"></div>

                        <div data-id="5" id="modal-client-tab-bills-content" class="tabs__item"></div>

                        <div data-id="6" class="tabs__item"></div>

                        <div data-id="7" class="tabs__item"></div>

                    </div>
                </div>

            </div>



        </div>
    </div>
</template>

<script>
import {defineComponent, getCurrentInstance, reactive, ref, watch} from "vue";
import {usedModalsStore} from "@/stores/modals.js";
import {useClientsStore} from "@/stores/clients.js";

export default defineComponent({
    name: "ModalClient",
    components: {},
    setup() {
        const modalsStore = usedModalsStore();
        const currentInstance = getCurrentInstance();
        const clientsStore = useClientsStore();

        /*
        * Start Открытие/закрытие модального окна
        * */
        let isOpen = ref(modalsStore.modals.ModalClient === '');
        const closeModal = () => {
            isOpen.value = undefined;
            modalsStore.removeModalById('ModalClient');
        }
        watch(isOpen, (newIsOpen, oldIsOpen) => {
            if (newIsOpen) {
                modalsStore.modals[currentInstance.type.name] = currentInstance.type;
            }

            if (!newIsOpen) {
                modalsStore.removeModalById(currentInstance.type.name);
            }
        });
        /*
        * End Открытие/закрытие модального окна
        * */

        /*
        * Start tabs
        * */
        const modalTabs = reactive([
            {
                id: 1,
                isActive: true,
                name: "Информация"
            },
            {
                id: 2,
                isActive: false,
                name: "Контактные лица"
            },
            {
                id: 3,
                isActive: false,
                name: "Объекты"
            },
            {
                id: 4,
                isActive: false,
                name: "Договоры"
            },
            {
                id: 5,
                isActive: false,
                name: "Счета"
            },
        ]);

        console.log(modalTabs);
        /*
        * End tabs
        * */



        let clientId = ref(null);
        let client = reactive({});
        watch(clientId, (newClientId, oldClientId) => {
            client = Object.assign(client, clientsStore.getClientById(newClientId));
        });

        return {
            isOpen,
            clientId,
            client,
            modalTabs,
            closeModal
        }
    }
});
</script>
