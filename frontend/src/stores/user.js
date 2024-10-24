import { defineStore } from 'pinia';
import { reactive, watch } from 'vue';
import { globalUtil } from '@/utils/globalUtil.js';

export const useUserStore = defineStore('userStore', () => {
    let user = reactive({});
    let post = reactive({});

    const { api, router } = globalUtil();

    watch(user, async (n, o) => {
        if (!n.access_token) {
            logout();
        }
    });

    api.Auth.me().then(r => {
        user = Object.assign(user, r.data);
        post = Object.assign(post, r.data.post);
    }).catch(err => {
        logout();
    });

    if (localStorage.getItem("access_token")) {
        setAccessToken(localStorage.getItem("access_token"));
    }

    function setAccessToken (token) {
        user.access_token = token;
        localStorage.setItem("access_token", user.access_token);

        return true;
    }

    function logout() {
        user.access_token = null;
        localStorage.removeItem("access_token");
        router.push("/login");
    }

    return { user, post, setAccessToken, logout }
});
