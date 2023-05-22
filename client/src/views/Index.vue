<template>
  <main id="app">
    <Plug v-if="isPlugVisible"/>
    <section class="content" v-if="!isPlugVisible">
      <aside>
        <Sidebar/>
      </aside>
      <section style="width: 70%">
        <Context/>
      </section>
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
import Display from "./Display.vue";
import Context from "./Context.vue";
import Step from "../components/templates/Context/Step.vue";


export default {
  name: 'app',
  components: {
    Context,
    Course,
    Footer,
    Profile,
    Selector,
    Plug,
    Sidebar,
    Main,
    Home,
    Display,
    Step
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
  height: 90%;
  width: 100%;
}
</style>