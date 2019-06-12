import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Github from './views/Github.vue'
import JobRequest from './views/JobRequest.vue'
import Recruitment from './views/Recruitment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/github',
      name: 'github',
      component: Github
    },
    {
      path: '/jobrequest',
      name: 'jobRequest',
      component: JobRequest
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: Recruitment
    }
  ]
})
