<!--script setup>
  import {RouterView} from "vue-router"
</script-->

<template>
  <main id="app">
    <Main></Main>
    <Home></Home>
    <!--RouterView/>
    <keep-alive>
      <index-view></index-view>
    </keep-alive-->
  </main>
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