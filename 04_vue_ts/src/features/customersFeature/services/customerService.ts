import client from '@/plugins/axios'
import ICustomer from '@/features/customersFeature/model/ICustomer'
export default {
  getCustomers () {
    return client.get('/customers')
      .then((response) => {
        return response.data
      }).catch(() => {
        console.warn('Server down ???')
      })
  },

  deleteOneCustomer (id: number) {
    return client.delete('/customers/' + id)
      .then((response) => {
        return response
      }).catch(() => {
        console.warn('Server down ???')
      })
  },

  postCustomer (customer: ICustomer) {
    return client.post('/customers', customer)
      .then((response) => {
        return response.data
      }).catch(() => {
        console.warn('Server down ???')
      })
  }
}
