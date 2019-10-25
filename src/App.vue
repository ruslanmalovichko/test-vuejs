<template>
  <div id="app">
    <div class="vld-parent">
      <loading :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"></loading>
    </div>
    <router-link :to="{ name: 'PostsList' }">PostsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'app',
  data() {
      return {
          isLoading: false,
          fullPage: true
      }
  },
  components: {
      Loading
  },
  methods: {
    doAjax() {
        this.isLoading = true;
        // simulate AJAX
        setTimeout(() => {
          this.isLoading = false
        },5000)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    }
  }
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
</style>
