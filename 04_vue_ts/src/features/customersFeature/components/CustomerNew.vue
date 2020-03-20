<template>
    <v-form @submit.prevent="formSubmit">
      <v-text-field label="Name" type="text" v-model="name" :rules="nameRules"></v-text-field>
      <v-text-field label="Purchases" type="number" v-model.number="purchases" :rules="purchasesRules"></v-text-field>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
</template>

<script lang="ts">
import ICustomer from '@/features/customersFeature/model/ICustomer'

export default {
  name: 'CustomerNew',
  data: function () {
    return {
      name: '',
      nameRules: [
        (value: string) => value.length > 2 || 'Name zu kurz'
      ],
      purchases: 0,
      purchasesRules: [
        (value: number) => value >= 0 || (value + ' ist keine Zahl')
      ]
    }
  },
  methods: {
    formSubmit: function () {
      const customer: ICustomer = {
        name: this.name,
        purchases: this.purchases
      }
      this.$store.dispatch('createCustomer', customer)
        .then(() => {
          this.$router.push({
            path: '/customers'
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
