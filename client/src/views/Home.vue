<template>
  <div class="navbar">
      <Navbar></Navbar>

  </div>
  <div class="login">
      <Login></Login>
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";
export default {
  name: "Home",
  components: {
      Navbar,
      Login
  }
}
</script>

<style>

</style>