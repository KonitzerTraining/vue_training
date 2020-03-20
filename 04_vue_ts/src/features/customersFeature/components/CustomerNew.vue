<template>
    <v-form>
      <v-text-field label="Name" type="text"></v-text-field>
      <v-text-field label="Purchases" type="number"></v-text-field>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
</template>

<script>
export default {
  name: 'CustomerNew',
  data: function () {
    return {
      customer: {}
    }
  }
}
</script>

<style scoped>

</style>
