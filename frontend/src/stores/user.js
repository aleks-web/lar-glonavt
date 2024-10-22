import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const userStore = defineStore('user', () => {
    let user = reactive({});

    if (localStorage.getItem("access_token")) {
        setAccessToken(localStorage.getItem("access_token"));
    }

    function setAccessToken (token) {
        user.access_token = token;
        localStorage.setItem("access_token", user.access_token);

        return true;
    }

    return { user, setAccessToken }
});
