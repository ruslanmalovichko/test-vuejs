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
    <notifications group="auth" position="top left" />
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
    nodeQuery: {
      query: gql`query Article {
        nodeQuery {
          count
          entities {
            entityId
            entityType
            ... on Node {
              title
            }
            ... on NodeArticle {
              body {
                value
              }
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
        var id = this.id;
        if (result.data.nodeQuery.entities.length) {
          result.data.nodeQuery.entities.forEach(function(element) {
            console.log(id);
            if (element.entityId == id) {
              console.log(element);
              console.log(this);
              this.article = element
              this.isLoading = false
            }
          }, this);
        }
        else {
          this.isLoading = false
        }
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
  },
  mounted(){
    console.log('mounted')
    console.log(this.$apollo.queries.nodeQuery)
    this.$apollo.queries.nodeQuery.refresh({})
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
