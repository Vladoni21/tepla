<!--script setup>
  import {RouterView} from "vue-router"
</script-->

<template>
    <main id="app">
        <Main></Main>
        <Home></Home>
        <LoaderDB></LoaderDB>
        <LoaderIMG></LoaderIMG>
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
import LoaderDB from "./components/loaders/db_loader.vue";
import LoaderIMG from "./components/loaders/img_loader.vue";


export default {
    name: 'app',
    components: {
        Main,
        Home,
        About,

        LoaderDB,
        LoaderIMG
    }
}
</script>

<style>

</style>