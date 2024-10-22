<template>
    <h1>Login Page</h1>

    <div>
        <input type="text" v-model="loginInput" name="login" placeholder="Email">
        <input type="text" v-model="passwordInput" name="password" placeholder="Пароль">
        <button class="btn" @click="signIn(loginInput, passwordInput)">Войти</button>
    </div>
</template>

<script>
import {defineComponent, ref, watch} from "vue";
import {globalUtil} from "@/utils/globalUtil.js";
import {userStore} from "@/stores/user.js";


export default defineComponent({
    components: {},
    setup() {
        const nowUserStore = userStore();

        const {api, router} = globalUtil();
        const loginInput = ref();
        const passwordInput = ref();

        const signIn = async (l, p) => {
            let signInResult = await api.Auth.login({email: l, password: p});

            if (signInResult.success && nowUserStore.setAccessToken(signInResult.access_token)) {
                router.push('/');
            }
        };

        return {
            loginInput,
            passwordInput,
            signIn
        }
    }
});
</script>
