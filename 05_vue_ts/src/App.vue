<template>
  <v-app id="app">

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Little CRM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded v-for="link in links" :to="link.url"  :key="link.label">{{link.label}}</v-btn>
      <v-progress-circular
        :indeterminate="$store.state.loading"
        color="white"
      ></v-progress-circular>
    </v-app-bar>
    <v-content class="mb-4">
      <router-view/>
    </v-content>
    <v-footer absolute class="font-weight-medium" color="primary" dark>
      <v-col class="text-center" cols="12">
        <strong>Little CRM</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
      links = [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Customers',
          url: '/customers'
        },
        {
          label: 'New',
          url: '/customers/new'
        },
        {
          label: 'About',
          url: '/about'
        }, {
          label: 'Imprint',
          url: '/imprint'
        }
      ];

  /* // life-cycle hook
      created () {
        this.$store.dispatch('fetchCustomers')
      } */
}

</script>
