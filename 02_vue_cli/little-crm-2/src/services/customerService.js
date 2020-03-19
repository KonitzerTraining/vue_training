import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

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
