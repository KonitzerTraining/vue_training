/*
export default {
  created () {
    console.log('created')
    console.log(this.name)
    console.log(this.$data)
    console.log('HTML:', this.$el)
  },
}
*/

// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export default class CrudOperations extends Vue {
  changeValue (newValue) {
    this.value = newValue
  }

  created () {
    console.log('created ########')
    console.log(this.name)
    console.log(this.$data)
    console.log('HTML:', this.$el)
  }
}
