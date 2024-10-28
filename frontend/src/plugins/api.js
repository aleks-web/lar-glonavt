import axios from "axios";

const host = import.meta.env.VITE_BACKEND_HOST;

const axiosInstance = axios.create({
    baseURL: host,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
    },
});

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            /*
            * Авторизация
            * */
            Auth: {
                login: async (data) => {
                    try {
                        const response = await axiosInstance.post('/auth/login', data);
                        axiosInstance.defaults.headers.Authorization = 'Bearer' + response.data.access_token;
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                logout: async () => {
                    try {
                        const response = await axiosInstance.post('/auth/logout');
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                me: async () => {
                    const response = await axiosInstance.get('/auth/me');
                    return response;
                }
            },



            /*
            * Работа с клиентами
            * */
            Clients: {
                getClients: async () => {
                    try {
                        const response = await axiosInstance.get('/client');
                        return response.data;
                    } catch (err) {
                        return err.response.data;
                    }
                },
                createClient: async (client) => {
                    const response =  await axiosInstance.post('/client', client);
                    return response.data;
                }
            }
        }
    }
}
