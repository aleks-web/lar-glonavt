import {defineStore} from 'pinia';
import {reactive, ref, watch} from 'vue';
import {globalUtil} from "@/utils/globalUtil.js";

export const useClientsStore = defineStore('clientsStore',() => {
    let clients = ref([]);

    const {api} = globalUtil();

    getClients();
    async function getClients() {
        const data = await api.Clients.getClients();

        clients.value = data;
    }

    function getClientById(clientId) {
        let clientInStore = clients.value.filter(el => {
            return el.id == clientId;
        });

        if (clientInStore[0]) {
            return clientInStore[0];
        } else {
            console.log('Клиентов в сторе нет');
        }
    }

    return { clients, getClientById }
});
