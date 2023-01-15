import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/pages/MainPage/MainPage.vue';
import ClassesListPage from '@/views/pages/ClassesPages/ClassesListPage/ClassesListPage.vue';
import ClassPage from '@/views/pages/ClassesPages/ClassPage/ClassPage.vue';
import NotificationsPage from '@/views/pages/NotificationsPage/NotificationsPage.vue';
import SchedulePage from '@/views/pages/SchedulePages/SchedulePage.vue';
import UserPage from '@/views/pages/UserPage/UserPage.vue';



const routes = [
    {
        path: '/',
        redirect: `/home`
    },
    {
        path: '/home',
        component: MainPage
    },
    {
        path: '/classes/',
        component: ClassesListPage,
    },
    {
        path: '/classes/:classId',
        component: ClassPage,
    },
    {
        path: '/notifications',
        component: NotificationsPage
    },
    {
        path: '/schedule',
        component: SchedulePage
    },
    {
        path: '/user',
        component: UserPage
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router