import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ApartmentsList from "./pages/ApartmentsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/apartments",
            name: "apartments",
            component: ApartmentsList,
        },
    ],
});

export { router };