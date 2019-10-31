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
  apollo: {
    nodeQuery: {
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
      }`,
      pollInterval: 0,
      result(result) {
        this.articles = result.data.nodeQuery
      }
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
