<template>
    <h1>
      Details of Customer #{{this.$route.params.id}}
      {{customer}}
    </h1>
</template>

<script>
/* import Vue from 'vue'
import Component from 'vue-class-component' */
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class CustomerNew extends Vue {
  @Prop(Object) customer
}

</script>

<style scoped>

</style>
