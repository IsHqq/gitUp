import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/Login'
import Register from '@/components/login/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/Register',
      name:'Register',
      component: Register
    }
  ]
})
