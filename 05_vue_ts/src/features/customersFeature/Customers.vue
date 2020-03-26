<template>
  <div>
    <h2>Customer Dashboard</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import CustomersList from '@/features/customersFeature/components/CustomersList'
import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  components: {
    CustomersList
  }
/*  beforeRouteEnter (to, from, next) {
    console.log('test')
  } */
})
export default class Customers extends Vue {
  name = 'Customers'
}
</script>

<style scoped>

</style>
