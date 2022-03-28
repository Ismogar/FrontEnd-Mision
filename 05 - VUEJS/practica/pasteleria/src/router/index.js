import { createRouter, createWebHashHistory } from 'vue-router'
import ClienteView from '../views/HomeView.vue'
import PasteleroView from '../views/PasteleroView.vue'

const routes = [
  {
    path: '/',
    name: 'cliente',
    component: ClienteView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router