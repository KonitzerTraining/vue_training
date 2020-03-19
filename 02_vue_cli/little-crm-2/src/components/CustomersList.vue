<template>
  <div>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

  </div>
</template>

<script>

// import customerService from '@/services/customerService'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CustomersList',
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Purchases', value: 'purchases' }
      ]
      //    customers: []
    }
  },
  computed: {
    ...mapState(['customers']),
    ...mapGetters(['findByName'])
  }
  /* created () {
    customerService.getCustomers().then((customers) => {
      this.customers = customers
    })
  } */
}
</script>

<style scoped>

</style>
