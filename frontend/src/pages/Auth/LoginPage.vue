<template>
    <div class="module-authorization">
        <div class="region-authorization">

            <div class="authorization-form sign-in-form">
                <div class="authorization-form__container">
                    <div class="authorization-form__form">
                        <div class="authorization-form__logo">
                            <img src="./../../assets/img/glonavt_logo.svg" alt="Logo">
                        </div>

                        <h1 class="authorization-form__title">Вход в систему</h1>

                        <div class="authorization-form__inputs">
                            <input type="email" name="email" v-model="loginInput" autocomplete="on" required placeholder="Введите Email адрес">

                            <div class="input-block-password">
                                <input type="text" name="password" v-model="passwordInput" autocomplete="on" required placeholder="Введите пароль">
                                <span class="input-block-password__icon"></span>
                            </div>
                        </div>

                        <div class="authorization-form__footer">
                            <button @click="signIn(loginInput, passwordInput)" class="authorization-form__btn btn">Войти</button>
                            <router-link class="authorization-form__forget-pass" to="/recovery">Забыли пароль?</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {globalUtil} from "@/utils/globalUtil.js";
import {useUserStore} from "@/stores/user.js";

export default defineComponent({
    components: {},
    setup() {
        const userStore = useUserStore();

        const {api, router} = globalUtil();
        const loginInput = ref();
        const passwordInput = ref();

        const signIn = async (l, p) => {
            let signInResult = await api.Auth.login({email: l, password: p});



            if (signInResult.success && userStore.setAccessToken(signInResult.access_token)) {
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
