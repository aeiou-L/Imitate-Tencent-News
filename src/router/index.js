import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "index",
    component: index,
    redirect: '/important',
    children: [{
            path: '/important',
            component: () =>
                import ('../views/important.vue'),
            name: 'important',

        },
        {
            path: '/entertainment',
            component: () =>
                import ('../views/entertainment.vue'),
            name: 'entertainment',
        },
        {
            path: '/sports',
            component: () =>
                import ('../views/sports.vue'),
            name: 'sports'
        },
        {
            path: '/military',
            component: () =>
                import ('../views/military.vue'),
            name: 'military'
        },
        {
            path: '/internation',
            component: () =>
                import ('../views/internation.vue'),
            name: 'internation'
        },
        {
            path: '/technology',
            component: () =>
                import ('../views/technology.vue'),
            name: 'technology'
        },
        {
            path: '/finance',
            component: () =>
                import ('../views/finance.vue'),
            name: 'finance'
        },
        {
            path: '/fashion',
            component: () =>
                import ('../views/fashion.vue'),
            name: 'fashion'
        }
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router