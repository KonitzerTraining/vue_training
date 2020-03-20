<template>
  <div>
    <h2>New Customer</h2>
    <CustomerNew></CustomerNew>
  </div>
</template>

<script lang="ts">
import CustomerNew from '@/features/customersFeature/components/CustomerNew.vue'

export default {
  name: 'CustomersNew',
  components: {
    CustomerNew
  }
}
</script>

<style scoped>

</style>
