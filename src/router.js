import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import CreateUser from './views/CreateUser.vue'
import MenuJogo from './views/MenuJogo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'home',
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
