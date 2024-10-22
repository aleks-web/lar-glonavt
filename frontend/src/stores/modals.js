import { defineStore } from 'pinia';
import {ref} from 'vue';

export const openedModalsStore = defineStore('openedModals', () => {
    let modals = ref({});

    function removeModalById(ID) {
        if (modals.value[ID]){
            delete modals.value[ID];
        }
    }

    return { modals, removeModalById }
});
