import {createRouter, createWebHistory} from 'vue-router'
// import Home from "../components/Home";


const routes = [
    {path: '/home', component: () => import('../components/home.vue'), name: 'home'},
    // {path: '/home', component: () => import('../components/gallery'), name: 'gal'}
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export {
    router
} ;


