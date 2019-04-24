<template>
  <v-app light>
    <v-navigation-drawer persistent clipped v-model="drawer" enable-resize-watcher>
      <v-list>
        <v-list-tile v-for="(item, i) in navItems" :key="i" :to="item.route" exact>
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-x-reverse-transition mode="out-in">
          <router-view></router-view>
        </v-slide-x-reverse-transition>
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        navItems: [
          { icon: 'home', title: 'Home', route: { name: 'Home' } }
        ],
        title: 'VueBase'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
