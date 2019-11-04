<template>
  <div class="hello">
    <p>{{articles.count}}</p>
    <ul v-if="articles.entities && articles.count">
      <li v-for="article of articles.entities" v-bind:key="article.entityId">
        <p><a :href="'/article/' + article.entityId"><strong>{{article.entityLabel}}</strong></a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'ArticlesList',
  data () {
    return {
      articles: []
    }
  },
  async mounted(){
    console.log('mounted')
    console.log(this.$apollo.queries.nodeQuery)
    const response = await this.$apollo.query({
      query: gql`query Articles {
        nodeQuery {
          count
          entities {
            entityId
            entityLabel
            entityType
            ... on Node {
              title
            }
            ... on NodeArticle {
              fieldImage {
                title
                width
                height
                url
              }
            }
          }
        }
      }`
    })

    this.articles = response.data.nodeQuery
    console.log(this.articles);
    console.log(this);
    // if (response.data.JwtToken && response.data.JwtToken.jwt) {
    //   await localStorage.setItem('user-token', response.data.JwtToken.jwt)
    //   console.log('got token: ' + response.data.JwtToken.jwt)
    //   console.log(this.$apollo);
    //   this.$token = response.data.JwtToken.jwt
    //   console.log(this.$token);
    //   // console.log(this.$apollo.queries);
    //   // this.$apollo.queries.nodeQuery.refresh({})
    //   // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' })
    //   this.$router.push('/')

    //   // this.$notify.success('Login successful', 'Success!').on("destroyed", () => this.$router.push('/') )




    //   // this.$store.dispatch(AUTH_REQUEST, response.data.JwtToken.jwt).then(() => {
    //   //   this.$router.push('/')
    //   //   // this.$notify({ group: 'auth', clean: true })
    //   //   // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' })
    //   // })
    // }
    // else {
    //   // this.$notify({ group: 'auth', clean: true })
    //   // this.$notify({ group: 'auth', type: 'warn', text: 'Wrong password, please try again later', clean: true })
    //   this.$notify({ group: 'auth', type: 'error', text: 'Wrong password, please try again later' })
    // }
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
