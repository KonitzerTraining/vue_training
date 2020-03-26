import Customers from '@/features/customersFeature/Customers.vue'
import CustomersList from '@/features/customersFeature/components/CustomersList.vue'
import CustomerNew from '@/features/customersFeature/components/CustomerNew.vue'
import CustomerView from '@/features/customersFeature/components/CustomerView.vue'
import { Route } from 'vue-router'
import store from '@/store/index'

const routes = [
  {
    path: '/customers',
    // name: 'Customers',
    component: Customers,

    children: [
      {
        path: '',
        component: CustomersList,
        props: true,
        beforeEnter: (to: Route, from: Route, next: any) => {
          store.dispatch('fetchCustomers')
            .then(() => {
              to.params.customers = store.state.customers
              next()
            })
        }
      },
      {
        path: 'new',
        component: CustomerNew
      },
      {
        path: 'view/:id',
        name: 'customerView',
        component: CustomerView,
        props: true,
        beforeEnter: (to: Route, from: Route, next: any) => {
          // ...
          // +.. oder parseInt()
          to.params.customer = store.getters.byId(+to.params.id)
          next()
        }
      }
    ]
  }
]

export default routes
