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
  mounted() {
    this.fetchData()
  },
  // created() {
  //   this.fetchData()
  // },
  // watch: { // What are you doing here?
  //   '$route': 'fetchData'
  // },
  methods: {
    async fetchData() {
      // you have to swithc on loader HERE
      try {
        const responce = await axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/');
        this.post = responce.data;
        // you have to swithc off loader HERE
      } catch(err) {
        console.log(err);
      }

      // axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/')
      // .then((resp) => {
      //   this.post = resp.data
      // })
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
