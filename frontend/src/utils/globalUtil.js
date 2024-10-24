import { getCurrentInstance } from "vue";
import { useRoute } from 'vue-router';

export function globalUtil() {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error('globalUtil() must be called within a setup function.');
    }

    const router = instance.appContext.config.globalProperties.$router;
    const route = useRoute();
    const api = instance.appContext.config.globalProperties.$api;

    return {
        router,
        route,
        api
    };
}
