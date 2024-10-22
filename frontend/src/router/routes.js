import MainPage from "@/pages/MainPage.vue";
import ClientsPage from "@/pages/ClientsPage.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
        meta: { title: "test" }
    },
    {
        path: '/clients',
        component: ClientsPage,
    },
    {
        path: "/login",
        component: LoginPage
    }
];

export default  routes;
