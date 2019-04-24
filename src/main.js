import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

import App from './App'
import router from './router'
import { store } from './store'

Vue.prototype.$http = axios
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
