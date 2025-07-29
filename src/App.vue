<template>
  <v-app>
    <MenuDrawer v-model:drawer="drawer" />

    <v-app-bar app color="beige">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Colinho da Cá</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuDrawer from './components/MenuDrawer.vue'

export default {
  name: 'App',
  components: {
    MenuDrawer
  },
  data: () => ({
    drawer: true
  })
}
</script>
