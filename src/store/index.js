import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// dynamically load all .js files from 'store/modules' folder and add to Vuex store definition
const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach((key) => {
  let module = files(key)
  let name = key.replace(/(\.\/|\.js)/g, '')
  modules[name] = module.default
})

export const store = new Vuex.Store({
  namespaced: true,
  modules: modules
})
