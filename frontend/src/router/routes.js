import MainPage from "@/pages/MainPage.vue";
import ClientsPage from "@/pages/ClientsPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/clients',
        component: ClientsPage,
    }
];

export default  routes;
