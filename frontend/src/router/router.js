import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const isLoggedIn = () => {
    return localStorage.getItem('access_token');
}

const protectedRoutes = [
    "Main",
    "Clients"
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isProtected = protectedRoutes.includes(to.name);

    if(isProtected && !isLoggedIn()) {
        next({
            path: '/login'
        });
    } else next();
})

export default router;
