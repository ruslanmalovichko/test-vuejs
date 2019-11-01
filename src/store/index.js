import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import user from '../store/modules/user.js'
import auth from '../store/modules/auth.js'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
  },
  strict: debug,
})
