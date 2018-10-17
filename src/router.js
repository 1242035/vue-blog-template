import Vue from 'vue';
import Router from 'vue-router';
import Parse from 'parse';
import Home from './views/Home.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('./views/Blog.vue')
        },
        {
            path: '/posts',
            name: 'post',
            component: () => import('./views/Post.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/password/forgot',
            name: 'passwordForgot',
            component: () => import('./views/ForgotPassword.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/posts'];
    const authRequired = publicPages.includes(to.path);
    const loggedIn = Parse.User.current();

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});

export default router;