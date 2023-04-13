import {createRouter, createWebHashHistory} from "vue-router";

import Main from "@/views/Main.vue";
import Home from '@/views/Home.vue'
import About from "@/views/About.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router