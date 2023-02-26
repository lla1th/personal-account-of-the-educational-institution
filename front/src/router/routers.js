import { createRouter, createWebHistory } from 'vue-router';

// components
import Home from '../models/home/pages/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;