import { defineStore } from 'pinia';
import { reactive, watch } from 'vue';
import { globalUtil } from '@/utils/globalUtil.js';

export const useUserStore = defineStore('userStore', () => {
    let user = reactive({});
    let post = reactive({});

    const { api, router } = globalUtil();

    if (localStorage.getItem(('access_token'))) {
        getMe();
    }

    function getMe() {
        api.Auth.me().then(r => {
            user = Object.assign(user, r.data);
            post = Object.assign(post, r.data.post);
        }).catch(err => {
            logout();
        });
    }

    function logout() {
        localStorage.removeItem("access_token");
        router.push("/login");
    }

    return { user, post, logout }
});
