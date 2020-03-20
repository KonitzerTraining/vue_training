import client from '@/plugins/axios'
export default {
  getCustomers () {
    return client.get('/customers')
      .then((response) => {
        return response.data
      }).catch(() => {
        console.warn('Server down ???')
      })
  }
}
