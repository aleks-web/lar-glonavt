import axios from "axios";
const host = import.meta.env.VITE_BACKEND_HOST;
const token = localStorage.getItem('access_token');
const header = {
    headers: {
        Authorization: 'Bearer ' + token
    }
};

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            /*
            * Авторизация
            * */
            Auth: {
                login: async (data) => {
                    try {
                        const response = await axios.post(host + '/auth/login', data);
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                logout: async () => {
                    try {
                        const response = await axios.post(host + '/auth/logout', header);
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                me: async () => {
                    const response = await axios.get(host + '/auth/me', header);
                    return response;
                }
            },



            /*
            * Работа с клиентами
            * */
            Clients: {
                getClients: async () => {
                    try {
                        const response = await axios.get(host + '/client', header);
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                createClient: async (client) => {
                    const response =  await axios.get(host + '/client/create', Object.assign({params: client}, header));
                    return response.data;
                }
            }
        }
    }
}
