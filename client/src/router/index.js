import {createRouter, createWebHashHistory} from "vue-router";

/*
import Main from "./views/Main.vue";
import Home from './views/Home.vue'
import About from "./views/About.vue";
*/

const routes = [
    { name: 'main', path: '/', component: () => "./views/Main.vue" },
    { name: 'home', path: '/home', component: () => "./views/Home.vue" },
    { name: 'about', path: '/about', component: () => "./views/About.vue" }
]

export const index = createRouter({
    routes: routes, history: createWebHashHistory(process.env.BASE_URL)
})

// export default index