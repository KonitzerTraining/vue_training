<template>
  <div>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <!--<v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>-->
      <v-icon
        small
        @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>

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
    { text: 'Purchases', value: 'purchases' },
    { text: '', value: 'actions', sortable: false }
  ]

  deleteItem (id: number): void {
    console.log(id)
  }
}

</script>

<style scoped>
</style>
