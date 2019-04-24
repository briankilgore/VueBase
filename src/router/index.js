import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// dynamically load all .vue files from 'pages' folder and add corresponding routes
const files = require.context('../pages', false, /\.vue$/)
let routes = []
files.keys().forEach((key) => {
  let page = files(key)
  let name = key.replace(/(\.\/|\.vue)/g, '')
  let path = (name === 'Home') ? '/' : `/${name.toLowerCase()}`
  routes.push({
    path: path,
    name: name,
    component: page
  })
})

export default new Router({
  mode: 'history',
  routes: routes
})
