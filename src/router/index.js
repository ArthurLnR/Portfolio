import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../components/TheWelcome.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/MyContact.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/MyProjects.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../components/MySkills.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
