<template>
    <main id="app">
        <Main/>
        <Home/>
        <!--RouterView/>
        <keep-alive>
          <index-view></index-view>
        </keep-alive-->
    </main>
</template>

<script>


import Main from "./views/Main.vue";
import Home from './views/Home.vue';


export default {
    name: 'app',
    components: {
        Main,
        Home,
    }
}
</script>

<style>

</style>