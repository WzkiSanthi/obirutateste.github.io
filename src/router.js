import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import NotFoundPage from './views/NotFoundPage'
import CreateUser from './views/CreateUser'
import Home from './views/Home'
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
            meta: { title: 'VUXBALL - Log In' },
            component: Login
        },
        {
            path: '/create-user',
            name: 'createUser',
            meta: { title: 'VUXBALL - Create User' },
            component: CreateUser
        },
        {
            path: '/home',
            name: 'home',
            meta: { title: 'VUXBALL' },
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            meta: { title: 'VUXBALL - Profile' },
            component: Profile
        },
        {
            path: '/create-room',
            name: 'createRoom',
            meta: { title: 'VUXBALL - Create Room' },
            component: CreateRoom
        },
        {
            path: '/join-room',
            name: 'joinRoom',
            meta: { title: 'VUXBALL - Join Room' },
            component: JoinRoom
        },
        {
            path: '/room',
            name: 'room',
            meta: { title: 'VUXBALL - Room' },
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
    } else if (openNicknameRoutes.includes(to.name) && sessionStorage.getItem("auth") && !sessionStorage.getItem("nickname")) {
        next();
    } else if (openNicknameRoutes.includes(to.name) && sessionStorage.getItem("auth") && sessionStorage.getItem("nickname")) {
        next({ path: '/' });
    } else if (sessionStorage.getItem("auth") && !sessionStorage.getItem("nickname")) {
        next({ path: '/create-user' });
    } else if (sessionStorage.getItem("auth") && sessionStorage.getItem("nickname")) {
        next();
    } else {
        next({ path: '/login' });
    }
});

export default router;
