import { createRouter, createWebHistory } from 'vue-router'
// import Home from "../components/Home";

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
    name: '家',
    icon: 'el-icon-message',
    children: [],
  },
  {
    path: '/table',
    component: () => import('../components//table/Table.vue'),
    name: 'table',
    icon: 'el-icon-phone',
    children: [
      {
        path: '/home1',
        component: () => import('../components/home.vue'),
        name: 'home1',
        icon: 'el-icon-message',
      },
    ],
  },
  { path: '/home', component: () => import('../components/home.vue'), name: 'gal', children: [] },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router, routes }
