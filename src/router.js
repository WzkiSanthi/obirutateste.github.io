import Vue from 'vue'
import Store from './store';
import Router from 'vue-router'
import Login from './views/Login'
import NotFoundPage from './views/NotFoundPage'
import CreateUser from './views/CreateUser'
import MenuJogo from './views/MenuJogo'
import Profile from './views/Profile'
import CreateRoom from './views/CreateRoom'
import JoinRoom from './views/JoinRoom'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/404',
            name: '404',
            component: NotFoundPage
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/create-user',
            name: 'createUser',
            component: CreateUser
        },
        {
            path: '/home',
            name: 'home',
            component: MenuJogo
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/create-room',
            name: 'createRoom',
            component: CreateRoom
        },
        {
            path: '/join-room',
            name: 'joinRoom',
            component: JoinRoom
        }
    ]
})

//ROTAS LIVRES DE AUTENTICAÇÃO
const openRouter = ['404', 'login'];
const openNicknameRoutes = ['createUser']

router.beforeEach((to, from, next) => {
    if (openRouter.includes(to.name)) {
        next();
    } else if (openNicknameRoutes.includes(to.name) && localStorage.getItem("auth") && !localStorage.getItem("nickname")) {
        next();
    } else if (localStorage.getItem("auth") && !localStorage.getItem("nickname")) {
        next({ path: '/create-user', query: { redirect: to.fullPath } });
    } else if (localStorage.getItem("auth") && localStorage.getItem("nickname")) {
        next();
    } else {
        next({ path: '/login', query: { redirect: to.fullPath } });
    }
});

Store.dispatch('setup', router);

export default router;
