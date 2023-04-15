<template>
    <main id="app">
        <Main/>
        <Home/>

        <CardBenefit/>
        <CardBranch/>
        <!--RouterView/>
        <keep-alive>
          <index-view></index-view>
        </keep-alive-->
    </main>
</template>

<script>


import Main from "./views/Main.vue";
import Home from './views/Home.vue';
import CardBranch from "./components/gears/cards/CardBranch.vue";
import CardBenefit from "./components/gears/cards/CardBenefit.vue";


export default {
    name: 'app',
    components: {
        CardBenefit,
        CardBranch,
        Main,
        Home,
    }
}
</script>

<style>

</style>