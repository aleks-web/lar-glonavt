import { defineStore } from 'pinia';
import { reactive, watch } from 'vue';
import { globalUtil } from '@/utils/globalUtil.js';

export const useUserStore = defineStore('userStore', () => {
    let user = localStorage.getItem("user") ? reactive(JSON.parse(localStorage.getItem("user"))) : reactive({});

    const { api, router } = globalUtil();

    async function login(email, password) {
        let signInResult = await api.Auth.login({email: email, password: password});

        if (signInResult.success) {
            localStorage.setItem('access_token', signInResult.access_token);
            localStorage.setItem('user', JSON.stringify(signInResult.user));
            user.access_token = signInResult.access_token;
            user = Object.assign(user, signInResult.user);
            router.push("/");
        }
    }

    function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        router.push("/login");
    }

    return { user, logout, login }
});
