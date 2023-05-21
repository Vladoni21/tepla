<template>
  <section class="navigation">
    <nav>
      <div class="list active">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="title">Home</span>
        </a>
      </div>
      <div class="list">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </span>
          <span class="title">Courses</span>
        </a>
      </div>
      <div class="list">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="help-outline"></ion-icon>
          </span>
          <span class="title">Help</span>
        </a>
      </div>
      <div class="list">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </span>
          <span class="title">Account</span>
        </a>
      </div>
      <div class="list">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="calendar-number-outline"></ion-icon>
          </span>
          <span class="title">Credits</span>
        </a>
      </div>
      <div class="list" style="margin-top: 1020px;">
        <b/>
        <b/>
        <a href="#">
          <span class="icon">
            <ion-icon name="log-out-outline"></ion-icon>
          </span>
          <span class="title">Sing In/Up</span>
        </a>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Sidepanel",
  mounted() {
    let list = document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
          list[j++].className = 'list';
        }
        list[i].className = "list active";
      }
    }
  }
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: 75px;
  border-radius: 20px;
  box-sizing: initial;
  border-left: 5px solid #4d5bf9;
  background: #4d5bf9;
  transition: width 0.5s;
  overflow: hidden;
}
.navigation:hover {
  width: 250px;
}

.navigation nav {
  position: absolute;
  top: 0;
  Left: 0;
  width: 100%;
  padding-Left: 5px;
  padding-top: 50px;
}

.navigation nav div {
  position: relative;
  List-style: none;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.navigation nav div.active {
  background: #fff
}

.navigation nav div b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 100%;
  background: white;
  display: none;
}
.navigation nav div b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: #4d5bf9;
}

.navigation nav div b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 100%;
  background: white;
  display: none;
}
.navigation nav div b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: #4d5bf9;
}

.navigation nav div.active b:nth-child(1),
.navigation nav div.active b:nth-child(2) {
  display: block;
}

.navigation nav div a {
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}

.navigation nav div.active a {
  color: #000;
}

.navigation nav div a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  line-height: 70px;
  text-align: center;
  justify-content: center;
}

.navigation nav div a .icon ion-icon {
  font-size: 1.5em;
}

.navigation nav div a .title {
  position: relative;
  padding-left: 10px;
  line-height: 60px;
  white-space: nowrap;
}
</style>