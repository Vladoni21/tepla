<template>
    <header>
        <NavBar v-if="false"/>
    </header>
    <main id="app">
        <SideBar v-if="false"/>
        <Plug/>
        <!--RouterView/>
        <keep-alive>
          <index-view></index-view>
        </keep-alive-->
    </main>

    <footer/>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import Error from "./views/Error.vue"
import Main from "./views/Main.vue";
import Home from './views/Home.vue';
import Plug from "./views/Plug.vue";


export default {
    name: 'app',
    components: {
        Plug,
        NavBar,
        SideBar,
        Error,
        Main,
        Home,
    }
}
</script>

<style>

</style>