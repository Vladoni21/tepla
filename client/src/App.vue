<template>
  <div id="app">
    <Main></Main>
    <Home></Home>
  </div>
</template>

<script>

import Main from "./views/Main.vue";
import Home from './views/Home.vue'
import About from "./views/About.vue";

export default {
  name: 'app',
  components: {
    Main,
    Home,
    About
  }
}
</script>

<style>

</style>