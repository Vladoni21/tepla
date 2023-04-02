<template>
  <div class="navbar">
      <Navbar></Navbar>
  </div>
  <div class="login">
      <div class="container">
          <div class="text">
              <h2>Добро пожаловать!</h2>
              <p>TEAPLA - это уникальная обучающая платформа, где вы можете научиться чему угодно в любое время и в любом месте. Узнайте что угодно: начиная от изучения языков и заканчивая программированием, маркетингом, финансами и
                  предпринимательством. </p>
          </div>
          <div class="item">
              <Login></Login>
          </div>
      </div>
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
  .container{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      min-width: 800px;
      width: 800px;
      height: 450px;
      background: #7BAE7F;
      border-radius: 8px;
  }
  .item{
      position: relative;
      right: 0;
  }
  .text{
      position: relative;
      padding-right: 5px;
      padding-left: 5px;
      color: white;
  }
</style>