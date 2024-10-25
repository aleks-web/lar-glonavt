<template>
    <div class="header">
        <div class="header__container">
            <div class="header__left">
                <div class="header__title">{{ route.meta.title || '-' }}</div>
            </div>

            <div class="header__right">
                <div class="header__account">

                    <div class="header__user">
                        <span class="header__user-name">{{ userStore.user.name }}</span>
                        <span class="header__user-post">{{ userStore.post.name || '-'}}</span>
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
import {defineComponent, ref, watch} from "vue";
import {globalUtil} from "@/utils/globalUtil.js";
import {useUserStore} from "@/stores/user.js";

export default defineComponent({
    components: {},
    setup() {
        const userStore = useUserStore();
        const {route} = globalUtil();

        function logout() {
            userStore.logout();
        }

        return {logout, userStore, route}
    }
});
</script>
