import { createRouter, createWebHistory } from 'vue-router';

// components
import HomePage from '../models/home/pages/HomePage.vue';
import CalendarPage from '../models/calendary/pages/CalendarPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calendar', name: 'Calendar', component: CalendarPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
