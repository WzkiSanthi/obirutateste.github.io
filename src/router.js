import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import NotFoundPage from './views/NotFoundPage'
import CreateUser from './views/CreateUser'
import MenuJogo from './views/MenuJogo'
import Profile from './views/Profile'
import CreateRoom from './views/CreateRoom'
import JoinRoom from './views/JoinRoom'
import Room from './views/Room'

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
            meta: { title: '404' },
            component: NotFoundPage
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            meta: { title: 'SOCCERRUSH - Log In' },
            component: Login
        },
        {
            path: '/create-user',
            name: 'createUser',
            meta: { title: 'SOCCERRUSH - Create User' },
            component: CreateUser
        },
        {
            path: '/home',
            name: 'home',
            meta: { title: 'SOCCERRUSH' },
            component: MenuJogo
        },
        {
            path: '/profile',
            name: 'profile',
            meta: { title: 'SOCCERRUSH - Profile' },
            component: Profile
        },
        {
            path: '/create-room',
            name: 'createRoom',
            meta: { title: 'SOCCERRUSH - Create Room' },
            component: CreateRoom
        },
        {
            path: '/join-room',
            name: 'joinRoom',
            meta: { title: 'SOCCERRUSH - Join Room' },
            component: JoinRoom
        },
        {
            path: '/room',
            name: 'room',
            meta: { title: 'SOCCERRUSH - Room' },
            component: Room
        }
    ]
})

//ROTAS LIVRES DE AUTENTICAÇÃO
const openRouter = ['404', 'login'];
const openNicknameRoutes = ['createUser']

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (openRouter.includes(to.name)) {
        next();
    } else if (openNicknameRoutes.includes(to.name) && localStorage.getItem("auth") && !localStorage.getItem("nickname")) {
        next();
    } else if (openNicknameRoutes.includes(to.name) && localStorage.getItem("auth") && localStorage.getItem("nickname")) {
        next({ path: '/' });
    } else if (localStorage.getItem("auth") && !localStorage.getItem("nickname")) {
        next({ path: '/create-user', query: { redirect: to.fullPath } });
    } else if (localStorage.getItem("auth") && localStorage.getItem("nickname")) {
        next();
    } else {
        next({ path: '/login', query: { redirect: to.fullPath } });
    }
});

export default router;
