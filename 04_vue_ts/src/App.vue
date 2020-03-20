<template>
  <v-app id="app">

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Little CRM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded v-for="link in links" :to="link.url"  :key="link.label">{{link.label}}</v-btn>
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

export default Vue.extend({
  name: 'App',
  components: {},

  data () {
    return {
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Customers',
          url: '/customers'
        },
        {
          label: 'About',
          url: '/about'
        }, {
          label: 'Imprint',
          url: '/imprint'
        }
      ]
    }
  }
})
</script>
