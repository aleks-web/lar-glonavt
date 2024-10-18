<template>
    <div class="header">
        <div class="header__container">
            <div class="header__left">
                <div class="header__title">Title</div>
            </div>

            <div class="header__right">
                <div class="header__account">

                    <div class="header__user">
                        <span class="header__user-name">username</span>
                        <span class="header__user-post">Post</span>
                    </div>

                    <div class="header__btns">
                        <div class="header__btn-user">
                            <a href="#">
                                <img src="" alt="" />
                            </a>
                        </div>

                        <div class="header__btn-logout">
                            <a href="#" data-fancybox data-src="#fmodal-logout">
                                <svg><use xlink:href="#svg-logout"></use></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {}
    }
});
</script>
