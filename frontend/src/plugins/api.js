import axios from "axios";
const host = import.meta.env.VITE_BACKEND_HOST;

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            Auth: {
                login: async (data) => {
                    try {
                        const response = await axios.post(host + '/auth/login', data);
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                }
            },
            Clients: {
                getClients: async () => {
                    const response = await axios.get(host + '/client');
                    return response.data;
                }
            }
        }
    }
}
