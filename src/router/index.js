import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category.vue'
import rooms from '../views/rooms.vue'
import detail from '../views/detail.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'category',
    component: category
  },
  {
    path: '/rooms/:id',
    name: 'rooms',
    component: rooms
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
