import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router"


const routes: RouteRecordRaw[] = [
    { path: "/home", component: () => import('views/home/home.vue') },
    { path: "/", redirect: '/home' }
]
const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export {
    router
}