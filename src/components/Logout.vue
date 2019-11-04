<template>
  <div>
    <p>Logout</p>
  </div>
</template>

<script>
export default {
  beforeCreate() {
  // mount() {
    localStorage.removeItem('user-token')



    // this.$notify.success('Login successful', 'Success!').on("destroyed", () => this.$router.push('/') )
    // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' }).on("destroyed", () => this.$router.push('/') )

    this.$router.push('/')
  }
}
</script>
