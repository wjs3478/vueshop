import Vue from 'vue'
import App from './App.vue'
import {router} from './store/router.js'
import {store} from './store/store.js'
import axios from 'axios'

Vue.prototype.$http=axios

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
