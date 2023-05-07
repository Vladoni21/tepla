<template>
  <main id="app">
    <Header v-if="!isPlugVisible"/>
    <Plug v-if="isPlugVisible"/>
    <section class="content" v-if="!isPlugVisible">
      <Sidebar/>
      <Profile/>
    </section>
    <Footer/>
  </main>
</template>

<script>

import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./views/Main.vue";
import Home from './views/Home.vue';
import Plug from "./views/Plug.vue";
import expert from "./components/img/expert.jpg";
import Selector from "./components/blocks/puzzle/selector.vue";
import Profile from "./views/Profile.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'app',
  components: {
    Footer,
    Profile,
    Selector,
    Plug,
    Header,
    Sidebar,
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