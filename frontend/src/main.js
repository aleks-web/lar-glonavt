import {createApp} from "vue";
import App from "@/App.vue";
import Router from "@/router/router.js";
import Api from "@/plugins/api.js";

createApp(App)
    .use(Router)
    .use(Api)
    .mount('#app');