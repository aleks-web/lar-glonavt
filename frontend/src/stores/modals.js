import { defineStore } from 'pinia';
import {reactive, ref} from 'vue';

export const usedModalsStore = defineStore('modalsStore', () => {
    let modals = reactive({});

    function removeModalById(ID) {
        if (modals[ID]){
            delete modals[ID];
        }
    }

    return { modals, removeModalById }
});
