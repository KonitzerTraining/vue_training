<template>
  <div>
  <h1>Lifecycle Hooks</h1>
    <button @click="value = 123">Click</button>
    <p>{{value}}</p>
  </div>
</template>
<script lang="ts">

import Component, { mixins } from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import crudMixin from '@/shared/mixins/crud-operations'

@Component({
  beforeRouteEnter (to, from, next) {
    console.log('davor')
    next()
    // next({ path: 'customers' })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('vor dem Update')
  },
  beforeRouteLeave (to, from, next) {
    console.log('beim Wechsel')
    next()
  }
})
export default class About extends mixins(crudMixin) {
    name = 'About'
    value = 987

    @Watch('value')
    onValueChanged (v: number, vOld: number) {
      console.log(v, vOld)
    }

    beforeCreate () {
      console.log('beforeCreate')
      console.log(this.name)
      console.log(this.$data)
    }

    beforeMount () {
      console.log('beforeMount')
      console.log('HTML:', this.$el)
    }

    mounted () {
      console.log('mounted')
      console.log('HTML:', this.$el)
    }

    beforeUpdate () {
      console.log('beforeUpdate')
    }

    updated () {
      console.log('updated')
    }

    // Wenn ich ein neues Routing-Ziel auswähle
    beforeDestroy () {
      console.log('beforeDestroy')
      console.log('HTML:', this.$el)
    }

    destroyed () {
      console.log('destroyed')
      console.log('HTML:', this.$el)
      console.log(this.$data)
    }
}

</script>
