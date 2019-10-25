<template>
  <div>
    <p>Title: {{ post.title }}</p>
    <p>Body: {{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  data () {
    return {
      post: []
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/')
      .then((resp) => {
        this.post = resp.data
      })
    }
  },
  props: {
    id: {
      type: String,
    }
  }
}
</script>

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
