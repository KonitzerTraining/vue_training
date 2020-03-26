import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
// import Customers from '@/features/customersFeature/Customers.vue'
// import CustomersNew from '@/features/customersFeature/CustomersNew.vue'
import Default from '@/pages/Default.vue'
import About from '@/pages/About.vue'
import customersRouting from '@/features/customersFeature/customers-routing'

Vue.use(VueRouter)

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    /* beforeEach (to, from, next) {

    } */
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '*',
    name: 'Default',
    component: Default
  }
]

let routes: any[] = []
routes = routes.concat(mainRoutes, customersRouting)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
