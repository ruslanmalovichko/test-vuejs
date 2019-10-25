import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
import PostsList from '@/components/PostsList'
import Post from '@/components/Post'
import NotFound from '@/components/NotFound'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'PostsList',
      component: PostsList
    },
    {
      path: '/post/:id',
      props: true,
      name: 'Post',
      component: Post,
      meta: { title: 'Post', auth: true, edit: true },
    }
  ]
})
