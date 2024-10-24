<template>
    <div class="header">
        <div class="header__container">
            <div class="header__left">
                <div class="header__title">{{ route.meta.title || '-' }}</div>
            </div>

            <div class="header__right">
                <div class="header__account">

                    <div class="header__user">
                        <span class="header__user-name">{{ userStorage.user.name }}</span>
                        <span class="header__user-post">{{ userStorage.post.name || '-'}}</span>
                    </div>

                    <div class="header__btns">
                        <div class="header__btn-user">
                            <a href="#">
                                <img src="" alt="" />
                            </a>
                        </div>

                        <div class="header__btn-logout">
                            <span @click="logout">
                                <svg><use xlink:href="#svg-logout"></use></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {globalUtil} from "@/utils/globalUtil.js";
import {useUserStore} from "@/stores/user.js";

export default defineComponent({
    components: {},
    setup() {
        const userStorage = useUserStore();
        const {route, router} = globalUtil();

        function logout() {
            userStorage.logout();
        }

        return {logout, userStorage, route}
    }
});
</script>
