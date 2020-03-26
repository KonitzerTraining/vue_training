<template>
  <div>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item.actions="{ item }">
    <v-icon
      small
      class="mr-2"
      @click="viewItem(item.id)"
    >

        mdi-eye
      </v-icon>
   <!-- <v-icon
      small
      class="mr-2"
      @click="editItem(item)"
    >

      mdi-pencil
    </v-icon> -->
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
import store from '@/store/index'

import { mapState, mapActions } from 'vuex'

@Component({
  computed: {
    ...mapState(['customers'])
  },
  methods: {
    ...mapActions(['fetchCustomers'])
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('fetchCustomers')
      .then(() => {
        next()
      })
  }
})
export default class CustomersList extends Vue {
  name = 'CustomersList'
  headers = [
    { text: 'Id', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Purchases', value: 'purchases' },
    { text: '', value: 'actions', sortable: false }
  ]

  deleteItem (id: number): void {
    console.log(id)
    this.$store.dispatch('deleteOneCustomer', id)
  }

  viewItem (id: number): void {
    this.$router.push({ path: `/customers/view/${id}` })
  }

/*  created () {
    this.$store.dispatch('fetchCustomers')
  } */
}

</script>

<style scoped>
</style>
