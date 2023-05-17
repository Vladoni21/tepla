import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: () => import('../views/Index.vue')
        },
        {
            name: 'plug',
            path: '/test',
            component: () => import('../views/Course.vue')
        },
    ]
})
