<template>
  <div>
    <p>Logout</p>
  </div>
</template>

<script>
export default {
  async beforeCreate() {
  // mount() {
    await localStorage.removeItem('user-token')
    await this.$apolloProvider.defaultClient.resetStore()



    // this.$notify.success('Login successful', 'Success!').on("destroyed", () => this.$router.push('/') )
    // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' }).on("destroyed", () => this.$router.push('/') )

    this.$router.push('/')
  }
}
</script>
