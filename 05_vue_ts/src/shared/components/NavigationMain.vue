<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Little CRM</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text rounded v-for="link in links" :to="link.url"  :key="link.label">{{link.label}}</v-btn>
    <v-progress-circular
      :indeterminate="$store.state.loading"
      color="white"
    ></v-progress-circular>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue/'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import ILink from '@/shared/model/ILink'

@Component({})
export default class NavigationMain extends Vue {
  name = 'NavigationMain'
  @Prop({ default: [] }) links!: ILink[]
}

</script>

<style scoped>

</style>
