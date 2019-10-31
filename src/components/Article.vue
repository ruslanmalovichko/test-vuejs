<template>
  <div>
    <div class="vld-parent">
      <loading :active.sync="isLoading"
        :can-cancel="false"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    </div>

    <p v-if="article && article.title">Title: <span v-html="article.title"></span></p>
    <p v-if="article && article.body && article.body.value">Body: <span v-html="article.body.value"></span></p>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Loading from 'vue-loading-overlay';

export default {
  name: 'Article',
  data () {
    return {
      article: {},
      isLoading: true,
      fullPage: true,
      JwtToken: null
    }
  },
  components: {
    Loading
  },
  apollo: {
    // nodeQuery: {
    //   query: gql`query Article {
    //     nodeQuery {
    //       count
    //       entities {
    //         entityId
    //         entityType
    //         ... on Node {
    //           title
    //         }
    //         ... on NodeArticle {
    //           body {
    //             value
    //           }
    //           fieldImage {
    //             title
    //             width
    //             height
    //             url
    //           }
    //         }
    //       }
    //     }
    //   }`,
    //   pollInterval: 0,
    //   result(result) {
    //     var id = this.id;
    //     result.data.nodeQuery.entities.forEach(function(element) {
    //       console.log(id);
    //       if (element.entityId == id) {
    //         console.log(element);
    //         console.log(this);
    //         this.article = element
    //         this.isLoading = false
    //       }
    //     }, this);
    //     console.log(this.article);
    //   }
    // }
    JwtToken: {
      query: gql`query JwtToken($username: String!, $password: String!) {
        JwtToken(username: $username, password: $password) {
          jwt
        }
      }`,
      variables: {
        username: 'admin',
        password: 'admin',
      },
      pollInterval: 0,
      result(result) {
        console.log(window.jwttoken)
        console.log(result)

      if (result.data.JwtToken.jwt) {
          window.jwttoken = result.data.JwtToken?result.data.JwtToken.jwt:null
        }
        console.log(window.jwttoken)
      }
    }
  },
  props: {
    id: {
      type: String,
    }
  },
  methods: {
    onCancel() {
      console.log('User cancelled the loader.')
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
