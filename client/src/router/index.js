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
            name: 'course',
            path: '/course',
            component: () => import('../views/Course.vue')
        },
        {
            name: 'profile',
            path: '/profile',
            component: () => import('../views/Profile.vue')
        },
        {
            name: 'display',
            path: '/display',
            component: () => import('../views/Display.vue')
        },
        {
            name: 'context',
            path: '/context',
            component: () => import('../views/Context.vue')
        },
    ]
})
