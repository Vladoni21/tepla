<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Main from "./views/Main.vue";
export default {
  name: 'app',
  components:{
      Main,
    Home
  }
}
</script>

<style>

</style>