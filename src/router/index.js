import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
import PostsList from '@/components/PostsList'
import Post from '@/components/Post'
import ArticlesList from '@/components/ArticlesList'
import Article from '@/components/Article'
import NotFound from '@/components/NotFound'
import MyComponent from '@/components/MyComponent'
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
    },
    {
      path: '/articles',
      name: 'ArticlesList',
      component: ArticlesList
    },
    {
      path: '/article/:id',
      props: true,
      name: 'Article',
      component: Article,
    },
    {
      path: '/mycomponent',
      props: true,
      name: 'MyComponent',
      component: MyComponent,
    }
  ]
})
