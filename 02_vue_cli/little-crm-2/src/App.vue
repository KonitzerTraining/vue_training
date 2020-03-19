<template>
  <v-app id="app">

  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>Home</v-btn>
    <v-btn>Login</v-btn>
    <v-btn>Imprint</v-btn>
  </v-app-bar>
  <v-content class="mb-4">
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/imprint">Imprint</router-link>
    </div>
    <h2>Hi!</h2>
    <router-view/>
  </v-content>
  <v-footer absolute class="font-weight-medium" color="primary" dark>
    <v-col class="text-center" cols="12">
    <strong>Little CRM</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>
