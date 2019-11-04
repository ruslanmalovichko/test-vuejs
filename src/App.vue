<template>
  <div id="app">
    <router-link :to="{ name: 'ArticlesList' }">ArticlesList</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Logout' }">Logout</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vld-overlay .vld-background {
  opacity: 1 !important;
}
</style>
