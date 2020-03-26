<template>
  <v-app id="app">
    <NavigationMain :links="links"></NavigationMain>
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
import NavigationMain from '@/shared/components/NavigationMain.vue'

@Component({
  components: { NavigationMain }
})
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
