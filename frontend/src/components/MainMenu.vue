<template>
    <div class="menu">
        <ul class="menu__list">

            <li class="menu__item">
                <router-link to="/" class="menu__item-link">
                    <span class="menu__item-left">
                        <span class="menu__item-icon">
                            <svg><use xlink:href="#svg-component"></use></svg>
                        </span>
                        <span class="menu__item-title">Главная</span>
                    </span>
                </router-link>

                <router-link to="/clients" class="menu__item-link">
                    <span class="menu__item-left">
                        <span class="menu__item-icon">
                            <svg><use xlink:href="#svg-people"></use></svg>
                        </span>
                        <span class="menu__item-title">Клиенты</span>
                    </span>
                </router-link>
            </li>

        </ul>
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
