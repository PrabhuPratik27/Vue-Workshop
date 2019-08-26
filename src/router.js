import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhyVue from './views/WhyVue.vue'
import Instructions from './views/Instructions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/why-vue',
      name: 'why-vue',
      component: WhyVue
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: Instructions
    },
    { 
      path: '*', 
      redirect: '/home' 
    }
  ]
})
