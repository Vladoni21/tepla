<template>
  <header>
    <NavBar v-if="!isPlugVisible"/>
  </header>
  <main id="app">
    <SideBar v-if="!isPlugVisible"/>
    <Plug v-if="isPlugVisible"/>
    <slot v-if="!isPlugVisible">
      <Main/>
      <Home/>
    </slot>
  </main>

  <footer/>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import Main from "./views/Main.vue";
import Home from './views/Home.vue';
import Plug from "./views/Plug.vue";
import expert from "./components/img/expert.jpg";
import Selector from "./components/blocks/puzzle/selector.vue";


export default {
  name: 'app',
  components: {
    Selector,
    Plug,
    NavBar,
    SideBar,
    Main,
    Home,
  },
  data() {
    return {
      is: expert,
      isPlugVisible: false,
    }
  }
}
</script>

<style>

</style>