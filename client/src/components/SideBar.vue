<template>
  <section>
    <nav class="main-menu">
      <div>
        <a class="logo" href="http://startific.com">
        </a>
      </div>
      <div class="settings"></div>
      <div class="scrollbar" id="style-1">
        <Tag v-bind:arr="nav_list" tag="ul"/>
        <ul>
          <li class="">
            <a href="http://startific.com">
              <i class="fa fa-heart-o fa-lg"></i>
              <span class="share">
              <div class="addthis_default_style addthis_32x32_style"></div>
                <div style="position:absolute;
margin-left: 56px;top:3px;">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" class="share-popup"><img  alt="" src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png" width="30px" height="30px"/></a>
                  <a href="https://twitter.com/share" target="_blank" class="share-popup">
                    <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png" width="30px" height="30px" alt=""/>
                  </a>
                  <a href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_" target="_blank" class="share-popup"><img  alt="" src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png" width="30px" height="30px"/></a>
                </div>
              </span>
            </a>
          </li>
        </ul>
        <ul class="logout">
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
import Tag from "./gears/Tag.vue";
import Grid from "./Grid.vue";

export default {
  name: "SideBar",
  components: {Grid, Tag},
  data() {
    return {
      nav_list: [
        { title: "Главная", icon: "home", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Войти", icon: "lock", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Контакты", icon: "phone", class: "darkelishadow", href: "#", gear: "NavItem" },
        { title: "Новости", icon: "newspaper", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Технологии", icon: "flask", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Корзина", icon: "shopping-cart", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Музыка", icon: "music", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Разработка", icon: "code", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Искусство", icon: "brush", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Магазин", icon: "shop", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Игры", icon: "gamepad", class: "darkelishadowdown", href: "#", gear: "NavItem" },
        { title: "Блог", icon: "blog", class: "darkeli", href: "#", gear: "NavItem" },
        { title: "Помощь", icon: "question", class: "darkeli", href: "#", gear: "NavItem" },
        // e.t.c.
      ],
      test: [
        {id: 1, title: "Django разработчик", icon: "code", href: "#", class: "top_courses", gear: "LinkCourse"}
      ]
    }
  }
}
</script>

<style scoped>

nav {
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;

}

nav ul, nav li {
  outline:0;
  margin:0;
  padding:0;
  font-size: 10px;
  text-transform: uppercase;
}

.logo{
}

.settings {
  height:100px;
  float:left;
  background-repeat:no-repeat;
  width:250px;
  margin:0px;
  text-align: center;
  font-size:20px;
  font-family: 'Strait', sans-serif;
}


/* ScrolBar  */
.scrollbar {
  height: 90%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}

.scrollbar:hover {
  height: 90%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* Scrollbar Style */



#style-1::-webkit-scrollbar-track
{
  border-radius: 2px;
}

#style-1::-webkit-scrollbar
{
  width: 5px;
  background-color: #F7F7F7;
}

#style-1::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #BFBFBF;
}
/* Scrollbar End */

.main-menu:hover, nav.main-menu.expanded {
  width:250px;
  overflow:hidden;
  opacity:1;

}

.main-menu {
  background:#F7F7F7;
  position:absolute;
  top:0;
  bottom:0;
  height:100%;
  left:0;
  width:55px;
  overflow:hidden;
  -webkit-transition:width .2s linear;
  transition:width .2s linear;
  -webkit-transform:translateZ(0) scale(1,1);
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
  opacity:1;
  z-index: 999;
}

.no-touch .scrollable.hover {
  overflow-y:hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y:auto;
  overflow:visible;
}



.fa-lg {
  font-size: 1em;
}
.fa {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  top:12px;
  font-size:20px;
}


.main-menu>ul {
  margin:7px 0;
}

.main-menu li {
  position:relative;
  display:block;
  width:250px;
}

.main-menu li>a {
  position:relative;
  width:255px;
  display:table;
  border-collapse:collapse;
  border-spacing:0;
  color:#8a8a8a;
  font-size: 13px;
  text-decoration:none;
  -webkit-transform:translateZ(0) scale(1,1);
  -webkit-transition:all .14s linear;
  transition:all .14s linear;
  font-family: 'Strait', sans-serif;
  border-top:1px solid #f2f2f2;

  text-shadow: 1px 1px 1px  #fff;
}

.main-menu .nav-text  {

  position:relative;
  display:table-cell;
  vertical-align:middle;
  width:190px;
  font-family: 'Titillium Web', sans-serif;
}


.main-menu>ul.logout {
  position:absolute;
  left:0;
  bottom:0;

}



/* Logo Hover Property


.settings:hover, settings:focus {
  -webkit-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  -moz-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  -o-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
}

.settings:active, settings:focus {
  -webkit-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  -moz-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  -o-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
}
*/







/* Del */


.darkerli
{
  background-color:#ededed;
  text-transform:capitalize;
}

.darkerlishadow
{
  background-color:#ededed;
  text-transform:capitalize;
  -webkit-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
  -moz-box-shadow:    inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
  box-shadow:         inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
}


.darkerlishadowdown
{
  background-color:#ededed;
  text-transform:capitalize;
  -webkit-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
  -moz-box-shadow:    inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
  box-shadow:         inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
}

/* Darker element side menu End*/




.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
  color:#fff;
  background-color:#00bbbb;
  text-shadow: 0px 0px 0px;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}
</style>