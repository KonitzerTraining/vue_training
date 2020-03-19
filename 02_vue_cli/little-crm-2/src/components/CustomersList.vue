<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>

import customerService from '@/services/customerService'

export default {
  name: 'CustomersList',
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Purchases', value: 'purchases' }
      ],
      customers: []
    }
  },
  created () {
    customerService.getCustomers().then((customers) => {
      this.customers = customers
    })
  }
}
</script>

<style scoped>

</style>
