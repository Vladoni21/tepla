<template>
    <header>
        <NavBar/>
    </header>
    <main id="app">
        <SideBar/>
        <slot>
            <Main/>
            <Home/>
        </slot>
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


export default {
    name: 'app',
    components: {
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