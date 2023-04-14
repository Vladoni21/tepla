<!--script setup>
  import {RouterView} from "vue-router"
</script-->

<template>
    <main id="app">
        <Main></Main>
        <Home></Home>
        <Loader></Loader>
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
import Loader from "./components/Loader.vue";


export default {
    name: 'app',
    components: {
        Loader,
        Main,
        Home,
        About
    }
}
</script>

<style>

</style>