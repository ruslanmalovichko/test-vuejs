import Vue from 'vue/dist/vue.js'
import App from './App'
import store from './store/index.js'
// import Loading from 'components/lib/loading'
// import CenterContainer from 'components/lib/center-container'
import router from './router'
import VueApollo from 'vue-apollo'
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { setContext } from 'apollo-link-context'
import Notifications from 'vue-notification'
import ApolloClient from 'apollo-boost'

// Vue.component('loading', Loading)
// Vue.component('center-container', CenterContainer)
Vue.config.productionTip = false
Vue.use(VueApollo)
Vue.use(Notifications)

// HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://drupal-8-graphql/graphql',
// })

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('user-token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// Create the apollo client
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'http://drupal-8-graphql/graphql'
// })

const apolloClient = new ApolloClient({
  uri: 'http://drupal-8-graphql/graphql',
  request: (operation) => {
    const token = localStorage.getItem('user-token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  // client,
  store,
  // provide: apolloProvider.provide(),
  template: '<App/>',
  components: { App }
})
