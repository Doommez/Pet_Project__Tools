import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SubscriptionsPage from '../views/SubscriptionsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    name: 'subscriptions',
    path: '/subscriptions',
    component: SubscriptionsPage,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
