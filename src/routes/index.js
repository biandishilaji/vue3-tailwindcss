import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import BookCase from "@/pages/BookCase/Index.vue";

const history = createWebHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/bookcase", component: BookCase },
];
const router = createRouter({ history, routes });
export default router;
