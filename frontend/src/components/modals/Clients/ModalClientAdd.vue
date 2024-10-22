<template>
    <div class="modal modal--small" :class="{open: isOpen}">
        <svg @click="closeModal" class="modal__close"><use xlink:href="#svg-close"></use></svg>

        <div class="modal__container">
            <div class="modal__title">Новый клиент</div>

            <div style="display: flex; column-gap: 2.5rem;">
                <div style="display: flex;flex-direction: column;gap: 30px;">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; row-gap: 20px;">
                        test 1
                    </div>


                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem; row-gap: 20px;">
                        test 2
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 2.5rem;">
                        test 3
                    </div>
                </div>

                <div class="d-flex flex-column justify-content-between">
                    <button class="btn">Проверить</button>
                    <button class="btn js-submitter" style="font-weight: 700; width: max-content;">Сохранить</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent, ref, getCurrentInstance, watch} from "vue";
import { openedModalsStore } from "@/stores/modals.js";

export default defineComponent({
    name: "ModalClientAdd",
    components: {},
    setup() {
        const openedModals = openedModalsStore();
        const currentInstance = getCurrentInstance();

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


        return {
            isOpen,
            closeModal
        }
    }
});
</script>

<style lang="less">

</style>
