import Vue from 'vue/dist/vue.js'
import App from './App'
import store from './store/index.js'
// import Loading from 'components/lib/loading'
// import CenterContainer from 'components/lib/center-container'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

// Vue.component('loading', Loading)
// Vue.component('center-container', CenterContainer)
Vue.config.productionTip = false
Vue.use(VueApollo)

var jwttoken = window.jwttoken

// Create a new Middleware Link using setContext
const middlewareLink = setContext(() => {
  if (jwttoken) return {
    headers: {
       authorization: `Bearer ${jwttoken}`
    }
  }
})

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://drupal-8-graphql/graphql',
})

const link = middlewareLink.concat(httpLink)

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  store,
  // provide: apolloProvider.provide(),
  template: '<App/>',
  components: { App }
})
