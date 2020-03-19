<template>
<div>
  <h2>Customer Dashboard</h2>
  <CustomersList></CustomersList>
  <CustomersListModern></CustomersListModern>
</div>
</template>

<script>

import CustomersList from '@/components/CustomersList.vue'
import CustomersListModern from '@/components/CustomersListModern.vue'

export default {
  name: 'Customers',
  components: {
    CustomersList, CustomersListModern
  }
}
</script>

<style scoped>

</style>
