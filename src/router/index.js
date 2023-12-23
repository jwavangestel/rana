import { createRouter, createWebHistory } from 'vue-router'
import RanaApp from '../views/RanaApp.vue'
import RanaDetails from '../views/RanaDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RANA-lijst',
      component: RanaApp,
    },
    {
      path: '/event/:id',
      name: 'RanaDetails',
      props: true,
      component: RanaDetails,
    },    

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
