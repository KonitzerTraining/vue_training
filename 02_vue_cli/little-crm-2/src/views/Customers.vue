<template>
<div>
  <h2>Customer Dashboard</h2>
  <CustomersList></CustomersList>
</div>
</template>

<script>

import CustomersList from '@/components/CustomersList.vue'

export default {
  name: 'Customers',
  components: {
    CustomersList
  }
}
</script>

<style scoped>

</style>
