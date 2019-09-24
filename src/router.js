import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
const About = () => import('@/views/About')
 const Login = () => import('@/views/Login')

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    }
  ]
})
