import { createRouter, createWebHistory } from 'vue-router';

// components
import AuthPage from '../models/auth/pages/AuthPage.vue';
import HomePage from '../models/home/pages/HomePage.vue';

import CalendarPage from '../models/calendary/pages/CalendarPage.vue';
import SchedulePage from '../models/schedule/registry/pages/SchedulePage.vue';
import CabinetPage from '../models/cabinets/pages/CabinetsPage.vue';
import LessonsPage from '../models/lessons/pages/LessonsPage.vue';

import AcademicJournalDetail from '../models/academicJournalTeacher/detail/pages/AcademicJournalDetail.vue';
import AcademicJournalRegistry from '../models/academicJournalTeacher/registry/pages/AcademicJournalRegistry.vue';
import AcademicJournalStudentRegistry from '../models/academicJournalStudent/registry/pages/AcademicJournalStudentRegistry.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/auth', name: 'Auth', component: AuthPage, meta: { layout: 'auth-layout' },
  },
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
  {
    path: '/journal/student/registry',
    name: 'academicJournalStudentRegistry',
    component: AcademicJournalStudentRegistry,
  },
  {
    path: '/cabinets', name: 'Cabinets', component: CabinetPage,
  },
  {
    path: '/lessons', name: 'Lessons', component: LessonsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
