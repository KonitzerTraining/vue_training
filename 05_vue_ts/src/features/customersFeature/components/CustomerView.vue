<template>
  <div>
    <h1>
<!--      Details of Customer #{{this.$route.params.id}}-->
      Details of Customer no. {{id}}
    </h1>
    <p>{{customer}}</p>
  </div>
</template>

<script>
/* import Vue from 'vue'
import Component from 'vue-class-component' */
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class CustomerNew extends Vue {
  @Prop() customer
  @Prop() id
}

</script>

<style scoped>

</style>
