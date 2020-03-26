import Customers from '@/features/customersFeature/Customers.vue'
import CustomersList from '@/features/customersFeature/components/CustomersList.vue'
import CustomerNew from '@/features/customersFeature/components/CustomerNew.vue'
import CustomerView from '@/features/customersFeature/components/CustomerView.vue'
import { Route } from 'vue-router'

const routes = [
  {
    path: '/customers',
    // name: 'Customers',
    component: Customers,
    children: [
      {
        path: '',
        component: CustomersList
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
          to.params.customer = { id: 3, name: 'Hans' }
          next()
        }
      }
    ]
  }
]

export default routes
