<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link :to="{ name: 'PostsList' }">PostsList</router-link>
    <router-view></router-view>
  </div>
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
import PostsList from './components/PostsList.vue'
import NotFound from './components/NotFound.vue'

var routes = {
  '/helloworld': HelloWorld,
  '/postslist': PostsList,
  '/posts': Posts
}

export default {
  name: 'app',
  data: function () {
    return {
      currentRoute: window.location.pathname
    }
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  components: {
    HelloWorld, Posts, PostsList, NotFound
  },
  render (h) { return h(this.ViewComponent) }
}
</script> -->

<script>
export default {
  name: 'app'
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
