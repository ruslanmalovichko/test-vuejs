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
      // function response(id) {
      //   return new Promise(resolve => {
      //     resolve(axios.get('http://jsonplaceholder.typicode.com/posts/'+id+'/'));
      //   });
      // }

      // async function postResult(id) {
      //   const postResult = await response(id);
      //   return postResult.data;
      // }

      // this.post = postResult(this.id);

      // console.log(this.post);

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
