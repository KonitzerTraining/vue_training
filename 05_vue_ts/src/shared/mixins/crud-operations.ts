export default {
  created () {
    console.log('created')
    console.log(this.name)
    console.log(this.$data)
    console.log('HTML:', this.$el)
  }
}
