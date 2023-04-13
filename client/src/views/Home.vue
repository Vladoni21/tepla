<template>
  <article class="Home">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="login">
      <div class="text">
        <h2>Добро пожаловать!</h2>
        <p>TEAPLA - это уникальная обучающая платформа, где вы можете научиться чему угодно в любое время и в любом
          месте. Узнайте что угодно: начиная от изучения языков и заканчивая программированием, маркетингом, финансами и
          предпринимательством. </p>
      </div>
      <div class="item">
        <Login></Login>
      </div>
    </div>
    <!--features-->
    <section id="features">
      <div class="fea-disc">
        <h1>Наши преимущества</h1>
        <div class="fea-base">
          <div class="fea-box">
            <fa icon="graduation-cap"/>
            <h3>Быстрое освоение программы</h3>
          </div>
          <div class="fea-box">
            <fa icon="certificate"/>
            <h3>Обучение происходит с помощью практики</h3>
          </div>
          <div class="fea-box">
            <fa icon="award"/>
            <h3>Сертификат государственного образца</h3>
          </div>
        </div>
      </div>
    </section>
    <!--Courses-->
    <section id="course">
      <h1>Наши популярные курсы</h1>
      <div class="course-box">
        <div class="courses">
          <fa icon="code"/>
          <div class="details">
            <h6>Django разработчик</h6>
          </div>
        </div>
        <div class="courses">
          <fa icon="code"/>
          <div class="details">
            <h6>Python разработчик</h6>
          </div>
        </div>
        <div class="courses">
          <fa icon="code"/>
          <div class="details">
            <h6>JavaScript разработчик</h6>
          </div>
        </div>
        <div class="courses">
          <fa icon="calculator"/>
          <div class="details">
            <h6>Математика</h6>
          </div>
        </div>
        <div class="courses">
          <fa icon="globe"/>
          <div class="details">
            <h6>Английский язык</h6>
          </div>
        </div>
        <div class="courses">
          <fa icon="globe"/>
          <div class="details">
            <h6>Немецкий язык</h6>
          </div>
        </div>
      </div>
    </section>
    <!--Profiles-->
    <section id="experts">
      <h1>Наши лучшие преподаватели</h1>
      <div class="expert-box">
        <div class="profile">
          <img :src="image" alt="" class="expert">
          <h6>Райан Гослинг</h6>
          <p>Data science аналитик</p>
        </div>
        <div class="profile">
          <img :src="image" alt="" class="expert">
          <h6>Райан Гослинг</h6>
          <p>Сдал профильную метематику на 100 баллов</p>
        </div>
        <div class="profile">
          <img :src="image" alt="" class="expert">
          <h6>Райан Гослинг</h6>
          <p>JavaScript разработчик</p>
        </div>
        <div class="profile">
          <img :src="image" alt="" class="expert">
          <h6>Райан Гослинг</h6>
          <p>Дед немец, поэтому учитель немецкого</p>
        </div>
      </div>
    </section>
    <!-- Courses -->
    <section id="courses">
      <h1 class="heading">our courses</h1>
      <div class="box-container">
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-2.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-1.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete HTML tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-3.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-2.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete CSS tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-4.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-3.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete JS tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-5.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-4.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete Boostrap tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-6.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-5.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete JQuery tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
        <div class="box">
          <div class="tutor">
            <!--img src="images/pic-7.jpg" alt=""-->
            <div class="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div class="thumb">
            <!--img src="images/thumb-6.png" alt=""-->
            <span>10 videos</span>
          </div>
          <h3 class="title">complete SASS tutorial</h3>
          <!--a href="playlist.html" class="inline-btn">view playlist</a-->
        </div>
      </div>
      <div class="more-btn">
        <!--a href="courses.html" class="inline-option-btn">view all courses</a-->
      </div>
    </section>
  </article>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";
import expert from "./img/expert.jpg";

export default {
  data() {
    return {
      image: expert
    }
  },
  name: "Home",
  components: {
    Navbar,
    Login
  }
}
</script>

<style scoped>

:root{
  --main-color:#8e44ad;
  --red:#e74c3c;
  --orange:#f39c12;
  --light-color:#888;
  --light-bg:#eee;
  --black:#2c3e50;
  --white:#fff;
  --border:.1rem solid rgba(0,0,0,.2);
}

.Home {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

.login {
  margin-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 800px;
  height: 450px;
  background: #7BAE7F;
  border: 1px solid white;
  border-radius: 5px;
}

.item {
  position: relative;
  right: 0;
}

.text {
  position: relative;
  padding-right: 5px;
  padding-left: 5px;
  color: white;
  font-family: 'Open Sans', sans-serif;
}

/* features */
#features .fea-disc {
  background-color: #7BAE7F;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  min-width: 800px;
  border: 1px solid white;
}

#features {
  min-width: 800px;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
}

#features .fea-base {
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 25px 25px 20px;
}

#features .fea-box {
  border-radius: 5px;
  background: #95D7AE;
  text-align: center;
}

#features .fea-box {
  font-family: 'Open Sans', sans-serif;
  font-size: 2.3rem;
  color: white;
}

#features .fea-box h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  padding: 10px 0 7px 5px;
}

#features .fea-box p {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  padding-left: 5px;
}

/* course */
#course {
  margin-top: 50px;
  text-align: center;
  background-color: #7BAE7F;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  padding-bottom: 25px;
  min-width: 800px;
  border: 1px solid white;
}

#course .course-box {
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 25px 25px 20px;
}

#course .courses {
  font-size: 2.3rem;
  border-radius: 5px;
  text-align: center;
  background: #95D7AE;
  height: 100%;
}

/* experts */
.expert {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  margin-bottom: 15px;
}

#experts {
  margin-top: 50px;
  text-align: center;
  background-color: #7BAE7F;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  padding-bottom: 25px;
  min-width: 800px;
  border: 1px solid white;
}

#experts .expert-box {
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 25px 25px 20px;
}

#experts .expert-box .profile {
  font-size: 1em;
  background: #95D7AE;
  padding-top: 30px;
  border-radius: 5px;
}

#experts .expert-box h6 {
  font-size: 1.2em;
}

/* courses */
#courses .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap:1.5rem;
  justify-content: center;
  align-items: flex-start;
}

#courses .box-container .box{
  border-radius: .5rem;
  background-color: var(--white);
  padding: 2rem;
}

#courses .box-container .box .tutor{
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

#courses .box-container .box .tutor img{
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

#courses .box-container .box .tutor h3{
  font-size: 1.8rem;
  color: var(--black);
  margin-bottom: .2rem;
}

#courses .box-container .box .tutor span{
  font-size: 1.3rem;
  color:var(--light-color);
}

#courses .box-container .box .thumb{
  position: relative;
}

#courses .box-container .box .thumb span{
  position: absolute;
  top:1rem; left: 1rem;
  border-radius: .5rem;
  padding: .5rem 1.5rem;
  background-color: rgba(0,0,0,.3);
  color: #fff;
  font-size: 1.5rem;
}

#courses .box-container .box .thumb img{
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: .5rem;
}

#courses .box-container .box .title{
  font-size: 2rem;
  color: var(--black);
  padding-bottom: .5rem;
  padding-top: 1rem;
}

#courses .more-btn{
  text-align: center;
  margin-top: 2rem;
}

</style>