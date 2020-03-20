<template>
  <div>
    <h2>Customer Dashboard</h2>
    <CustomersList></CustomersList>
  </div>
</template>

<script>

import CustomersList from '@/features/customersFeature/components/CustomersList'
export default {
  name: 'Customers',
  components: {
    CustomersList
  }
}
</script>

<style scoped>

</style>
