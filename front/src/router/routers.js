import { createRouter, createWebHistory } from 'vue-router';

// components
import HomePage from '../models/home/pages/HomePage.vue';
import CalendarPage from '../models/calendary/pages/CalendarPage.vue';
import SchedulePage from '../models/schedule/registry/pages/SchedulePage.vue';
import AcademicJournalRegistry from '../models/academicJournal/registry/pages/AcademicJournalRegistry.vue';
import AcademicJournalDetail from '../models/academicJournal/detail/pages/AcademicJournalDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/calendar', name: 'Calendar', component: CalendarPage },
  {
    path: '/schedule',
    name: 'CalendarChanges',
    children: [
      {
        path: 'registry',
        name: 'scheduleRegistry',
        component: SchedulePage,
      },
    ],
  },
  {
    path: '/journal/teacher/registry',
    name: 'academicJournalTeacherRegistry',
    component: AcademicJournalRegistry,
  },
  {
    path: '/journal/teacher/detail/:id',
    name: 'academicJournalTeacherDetail',
    component: AcademicJournalDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
