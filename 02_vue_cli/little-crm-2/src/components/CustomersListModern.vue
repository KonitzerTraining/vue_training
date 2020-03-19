<template>
  <div style="margin-bottom: 5em">
  <h2>Test</h2>
  <v-btn @click="increment">Click</v-btn> {{count}}<br>
    <v-btn @click="find">Find</v-btn>{{found.name}}
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CustomersListModern',
  data () {
    return {
      found: {}
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('updateCount')
    },
    find: function () {
      this.found = this.findByName('Hans')
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['findByName'])
  }
}
</script>

<style scoped>

</style>
