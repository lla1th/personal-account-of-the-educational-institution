import { createRouter, createWebHistory } from 'vue-router';

// components
import HomePage from '../models/home/pages/HomePage.vue';
import CalendarPage from '../models/calendary/pages/CalendarPage.vue';
import SchedulePage from '../models/schedule/pages/SchedulePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calendar', name: 'Calendar', component: CalendarPage },
  { path: '/schedule/registry', name: 'CalendarChanges', component: SchedulePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
