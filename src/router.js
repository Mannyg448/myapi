import {createRouter, createWebHistory} from "vue-router";
import Index from "./pages/index.vue";
import Us from "./pages/us.vue";
import NotFound from "./pages/404.vue";



const routes = [
    {

    path: "/",
    name: "Index",
    component: Index,
    },
    
    {
        path: "/us",
        name: "Us",
        component: Us,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;