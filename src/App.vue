<script>
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
</script>

<style>
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
