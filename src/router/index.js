import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
import PostsList from '@/components/PostsList'
import Post from '@/components/Post'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostsList',
      component: PostsList
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})