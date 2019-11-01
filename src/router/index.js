import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
import PostsList from '@/components/PostsList'
import Post from '@/components/Post'
import ArticlesList from '@/components/ArticlesList'
import Article from '@/components/Article'
import NotFound from '@/components/NotFound'
import Login from '@/components/login'
import Account from '@/components/account'
import store from '../store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

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
      path: '/account',
      name: 'Account',
      component: Account,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
  ]
})
