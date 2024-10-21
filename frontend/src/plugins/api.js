import axios from "axios";
const host = import.meta.env.VITE_BACKEND_HOST;

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            Clients: {
                getClients: async () => {
                    const response = await axios.get(host + '/client');
                    return response.data;
                }
            }
        }
    }
}
