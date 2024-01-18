import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import reade1storieView from '../views/reade1storieView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  
  },

  {
    path: '/reade1srorie',
    name: 'reade1srorie',
    component: reade1storieView
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
