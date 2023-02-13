import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import ApartmentsList from "./pages/ApartmentsList.vue";
import SingleApartment from "./pages/SingleApartment.vue";

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
        {
            path: "/apartments/:slug",
            name: "single-apartment",
            component: SingleApartment,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },
    ],
});

export { router };