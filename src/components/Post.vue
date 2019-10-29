<template>
  <div>
    <div class="vld-parent">
      <loading :active.sync="isLoading"
        :can-cancel="false"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    </div>

    <p>Title: {{ post.title }}</p>
    <p>Body: {{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Post',
  data () {
    return {
      post: [],
      isLoading: true,
      fullPage: true
    }
  },
  mounted() {
    this.fetchData()
  },
  components: {
      Loading
  },
  // created() {
  //   this.fetchData()
  // },
  // watch: { // What are you doing here?
  //   '$route': 'fetchData'
  // },
  methods: {
    async fetchData() {
      // this.isLoading = true;
      try {
        const responce = await axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/');
        this.post = responce.data;
        this.isLoading = false
      } catch(err) {
        console.log(err);
      }

      // axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/')
      // .then((resp) => {
      //   this.post = resp.data
      // })
    },
    onCancel() {
      console.log('User cancelled the loader.')
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
