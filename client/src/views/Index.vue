<template>
  <main id="app">
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
import Main from "./Main.vue";
import Home from './Home.vue';
import Plug from "./Plug.vue";
import Selector from "../components/blocks/puzzle/selector.vue";
import Profile from "./Profile.vue";
import Footer from "../components/bars/Footer.vue";
import Course from "../views/Course.vue";
import Sidebar from "../components/bars/Sidebar.vue";


export default {
  name: 'app',
  components: {
    Course,
    Footer,
    Profile,
    Selector,
    Plug,
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
  height: 90%;
  width: 100%;
}
</style>