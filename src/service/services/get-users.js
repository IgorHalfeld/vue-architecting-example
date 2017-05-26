
export default {
  name: 'getUsers',
  handler () {
    return this.$axios.get('/users')
  }
}
