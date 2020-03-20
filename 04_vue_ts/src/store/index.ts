import Vue from 'vue'
import Vuex from 'vuex'
import customerService from '@/features/customersFeature/services/customerService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    customers: []
  },
  mutations: {
    SET_CUSTOMERS (state, customers) {
      state.customers = customers
    }
  },
  actions: {
    fetchCustomers ({ commit }) {
      customerService.getCustomers()
        .then((customers) => {
          commit('SET_CUSTOMERS', customers)
        })
    }
  },
  getters: {},
  modules: {}
})
