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

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
// import customerService from '@/services/customerService'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState(['customers'])
  }
})
export default class CustomersList extends Vue {
  headers = [
    { text: 'Id', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Purchases', value: 'purchases' }
  ]
}

</script>

<style scoped>
</style>
