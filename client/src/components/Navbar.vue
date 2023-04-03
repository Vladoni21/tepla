<template>
  <div class="navbar">
      <a href="#" class="logo">TEAPLA</a>
      <div class="nav-links">
          <ul>
              <li class="active"><a href="#">Главная</a></li>
              <li><a href="#">Курсы</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Поддержка</a></li>
          </ul>
      </div>
      <img :src="image" alt="menu hamburger" class="menu-hamburger"/>
  </div>
</template>

<script>
import menu from "./img/menu-btn.png";

export default {
    data(){
        return{
            image: menu
        }
    },
    name: "Navbar"
}
</script>

<style scoped>
  .navbar{
      position: absolute;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 800px;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }
  .navbar a{
      color: white;
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 0 2px;
      transition: background-size .3s;
      background-color: transparent;
  }
  a:hover {
      background-size: 100% 2px;
  }
  .navbar .logo{
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;
  }
  .navbar .nav-links ul{
      display: flex;
  }
  .navbar .nav-links ul li{
      display: flex;
      margin: 0 25px;
  }
  .navbar .nav-links ul li.active a{
      color: #454851;
      font-weight: 600;
  }
  .navbar .menu-hamburger{
      z-index: 3;
      display: none;
      position: absolute;
      right: 50px;
      width: 35px;
      height: 35px;
  }

  /*@media screen and (max-width: 933px){*/
  /*    .navbar {*/
  /*        padding: 0;*/
  /*    }*/
  /*    .navbar .menu-hamburger {*/
  /*        display: block;*/
  /*    }*/
  /*    .nav-links {*/
  /*        margin-left: -40px;*/
  /*        margin-top: -40px;*/
  /*        top: 0;*/
  /*        left: 0;*/
  /*        position: absolute;*/
  /*        background-color: #7BAE7FC0;*/
  /*        backdrop-filter: blur(8px);*/
  /*        border-radius: 5px;*/
  /*        z-index: 3;*/
  /*        width: 850px;*/
  /*        height: 600px;*/
  /*        display: flex;*/
  /*        justify-content: center;*/
  /*        align-items: center;*/
  /*    }*/
  /*    .nav-links ul{*/
  /*        display: flex;*/
  /*        flex-direction: column;*/
  /*        align-items: center;*/
  /*    }*/
  /*    .navbar .nav-links ul li{*/
  /*        margin: 25px 0;*/
  /*        font-size: 1.2em;*/
  /*    }*/
  /*}*/
</style>
