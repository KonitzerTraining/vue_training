import Vue from 'vue'
import Vuex from 'vuex'
import customerService from '@/features/customersFeature/services/customerService'
import ICustomer from '@/features/customersFeature/model/ICustomer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    customers: [] as ICustomer[]
  },
  mutations: {
    SET_CUSTOMERS (state, customers: ICustomer[]) {
      state.customers = customers
    },
    DELETE_CUSTOMER (state, id) {
      state.customers = state.customers.filter((customer) => customer.id !== id)
    }
  },
  actions: {
    fetchCustomers ({ commit }) {
      customerService.getCustomers()
        .then((customers) => {
          commit('SET_CUSTOMERS', customers)
        })
    },
    deleteOneCustomer ({ commit }, id: number) {
      customerService.deleteOneCustomer(id)
        .then((response) => {
          commit('DELETE_CUSTOMER', id)
        })
    }
  },
  getters: {},
  modules: {}
})
