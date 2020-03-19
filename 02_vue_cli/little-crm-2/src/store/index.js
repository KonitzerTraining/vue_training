import Vue from 'vue'
import Vuex from 'vuex'
import customerService from '@/services/customerService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    customers: []
  },
  mutations: {
    INCREMENT_COUNT (state, value) {
      console.log(state)
      state.count += value
    },
    SET_CUSTOMERS (state, customers) {
      state.customers = customers
    }
  },
  actions: {
    updateCount ({ state, commit }) {
      commit('INCREMENT_COUNT', 1)
    },
    fetchCustomers ({ state, commit }) {
      customerService.getCustomers()
        .then((customers) => {
          commit('SET_CUSTOMERS', customers)
        })
    }
  },
  getters: {
    findByName: state => name => {
      return state.customers.find(customer => customer.name === name)
    }
  },
  modules: {}
})
