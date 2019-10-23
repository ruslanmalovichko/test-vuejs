<template>
  <div class="hello">
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
      this.posts = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
