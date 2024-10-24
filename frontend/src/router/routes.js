import MainPage from "@/pages/MainPage.vue";
import ClientsPage from "@/pages/ClientsPage.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";
import PasswordRecoveryPage from "@/pages/Auth/PasswordRecoveryPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'Main',
        meta: {
            title: 'Главная'
        }
    },
    {
        path: '/clients',
        component: ClientsPage,
        name: 'Clients',
        meta: {
            title: 'Клиенты'
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'Login',
        meta: {
            title: 'Авторизация'
        }
    },
    {
        path: "/recovery",
        component: PasswordRecoveryPage,
        name: 'PasswordRecovery',
        meta: {
            title: 'Восстановление пароля'
        }
    }
];

export default  routes;
