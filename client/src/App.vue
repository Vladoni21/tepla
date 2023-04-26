<template>
    <main id="app">
        <Error/>
        <!--RouterView/>
        <keep-alive>
          <index-view></index-view>
        </keep-alive-->
    </main>
</template>

<script>

import Error from "./views/Error.vue"
import Main from "./views/Main.vue";
import Home from './views/Home.vue';


export default {
    name: 'app',
    components: {
        Error,
        Main,
        Home,
    }
}
</script>

<style>

</style>