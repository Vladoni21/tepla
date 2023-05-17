<template>
  <main id="app">
    <Header v-if="!isPlugVisible"/>
    <Plug v-if="isPlugVisible"/>
    <section class="content" v-if="!isPlugVisible">
      <Sidebar/>
      <Profile/>
    </section>
    <Footer v-if="!isPlugVisible"/>
  </main>
</template>

<script>

import expert from "../components/img/expert.jpg";
import Header from "../components/bars/Header.vue";
import Sidebar from "../components/bars/Sidebar.vue";
import Main from "./Main.vue";
import Home from './Home.vue';
import Plug from "./Plug.vue";
import Selector from "../components/blocks/puzzle/selector.vue";
import Profile from "./Profile.vue";
import Footer from "../components/bars/Footer.vue";
import Course from "../views/Course.vue";


export default {
  name: 'app',
  components: {
    Course,
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
      isPlugVisible: true
    }
  },
  mounted() {
    this.showPreloader()
  },
  methods: {
    showPreloader() {
      setTimeout(
          () => {
            this.isPlugVisible = false
          }, 2000
      )
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