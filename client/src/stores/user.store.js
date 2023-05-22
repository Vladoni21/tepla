import { defineStore } from 'pinia';

import api from './api';

export const useUserStore = defineStore({
    id: 'user', state: () => ({
        user: {
            id: null, email: null, username: 'Guest', owned_courses: [],
        },
    }), actions: {
        async register({ email, username, password }) {
            const response = await api.post('/user/register', {
                email: email, username: username, password: password,
            });
            await this.login({ username: username, password: password });
        }, async login({ username, password }) {
            const response = await api.post('/user/login', {
                username: username, password: password,
            });
        }, async changeDetails({ username, email, password }) {
            const response = await api.get('/user/change', {
                username: username, email: email, password: password,
            });
        }, async fetchOwnCourses() {},
    }, // getters: {
    //     getUsername() {
    //         return this.user.username;
    //     },
    //     getCourseList() {
    //         return this.user.owned_courses;
    //     }
    // }
});