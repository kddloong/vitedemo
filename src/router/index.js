import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/Dashboard/dashboard.vue'),
    name: 'Dashboard',
    icon: 'el-icon-picture',
    children: [],
  },

  {
    path: '/home',
    component: () => import('../components/home.vue'),
    name: 'Home',
    icon: 'el-icon-s-home',
    children: [],
  },
  {
    path: '/table',
    component: () => import('../components//table/Table.vue'),
    name: 'Table',
    icon: 'el-icon-mobile-phone',
    children: [
      {
        path: 'base-table',
        component: () => import('../components/table/base-table.vue'),
        name: 'BaseTable',
        icon: 'el-icon-message',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
