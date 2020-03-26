import Vue from 'vue'
import Vuex from 'vuex'
import customerService from '@/features/customersFeature/services/customerService'
import ICustomer from '@/features/customersFeature/model/ICustomer'
// import * as customers from '@/features/customersFeature/store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // customers
  },
  state: {
    customers: [] as ICustomer[],
    loading: false
  },
  mutations: {
    SET_CUSTOMERS (state, customers: ICustomer[]) {
      state.customers = customers
    },
    DELETE_CUSTOMER (state, id) {
      state.customers = state.customers.filter((customer) => customer.id !== id)
    },
    ADD_CUSTOMER (state, customer: ICustomer) {
      state.customers.push(customer)
    },
    SET_LOADING (state, loadingState: boolean) {
      console.log(loadingState)
      state.loading = loadingState
    }
  },
  actions: {
    fetchCustomers ({ commit, dispatch }) {
      commit('SET_LOADING', true)
      customerService.getCustomers()
        .then((customers) => {
          commit('SET_CUSTOMERS', customers)

          dispatch('fetchCustomersDone')
        })
    },
    fetchCustomersDone ({ commit }) {
      commit('SET_LOADING', false)
    },
    deleteOneCustomer ({ commit, dispatch }, id: number) {
      commit('SET_LOADING', true)
      customerService.deleteOneCustomer(id)
        .then(() => {
          commit('DELETE_CUSTOMER', id)
          dispatch('deleteOneCustomerDone')
        })
    },
    deleteOneCustomerDone ({ commit }) {
      commit('SET_LOADING', false)
    },
    createCustomer ({ commit }, customer: ICustomer) {
      return customerService.postCustomer(customer)
        .then((newCustomer) => {
          commit('ADD_CUSTOMER', newCustomer)
        })
    }
  },
  getters: {},
  modules: {}
})
