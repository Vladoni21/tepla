<template>
  <header>
    <NavBar v-if="!isPlugVisible"/>
  </header>
  <main id="app">
    <Plug v-if="isPlugVisible"/>
    <section class="content" v-if="!isPlugVisible">
      <SideBar/>
      <Profile/>
    </section>
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
import Profile from "./views/Profile.vue";


export default {
  name: 'app',
  components: {
    Profile,
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
.content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
}
</style>