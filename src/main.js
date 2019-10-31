import Vue from 'vue/dist/vue.js'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// Add this to your Apollo imports.
import { setContext } from 'apollo-link-context'

Vue.config.productionTip = false
Vue.use(VueApollo)

// Create a new Middleware Link using setContext
const middlewareLink = setContext(() => ({
  headers: {
    // authorization: `Bearer ${HOWEVER_I_GET_MY_JWT}`
    authorization: `Bearer eQq2qCBTNc97dQR8uQ2X9MMFwtfHxXZCsT9AcKVpn6AWLM4YTrSM2KPds9qZSWKQMWpezdMX3nwF6vWUP9k5QPeuVQ6VJhTS9VRca`
  }
}));

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://drupal-8-graphql/graphql',
})

const link = middlewareLink.concat(httpLink);

// Cache implementation
// const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  // Tells Apollo to use the link chain with the http link we set up.
  link,
  // Handles caching of results and mutations.
  cache: new InMemoryCache(),
  // Useful if you have the Apollo DevTools installed in your browser.
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
  // provide: apolloProvider.provide(),
  template: '<App/>',
  components: { App }
})
