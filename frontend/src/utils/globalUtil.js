import { getCurrentInstance } from "vue";

export function globalUtil() {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error('globalUtil() must be called within a setup function.');
    }

    const router = instance.appContext.config.globalProperties.$router;
    const api = instance.appContext.config.globalProperties.$api;

    return {
        router,
        api
    };
}
