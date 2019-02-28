import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import CreateUser from './views/CreateUser.vue'
import MenuJogo from './views/MenuJogo.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
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
            path: '/menu',
            name: 'menuJogo',
            component: MenuJogo
        }
    ]
})

//ROTAS LIVRES DE AUTENTICAÇÃO
const openRouter = ['login'];
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

//AUTH
firebase.auth().onAuthStateChanged((user) => {
    //SET AUTH PARA ROTAS AUTENTICADAS
    user ? localStorage.setItem("auth", user.uid) : localStorage.removeItem("auth");
});

export default router;
