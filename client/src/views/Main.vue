<link rel="stylesheet" href="../../../../Desktop/desgin/css/style.css">
<template>
  <!--header-->
    <header class="header">
        <section class="flex">
            <div class="sd-bar">
                <div @click="showSidebar" id="user-btn">
                    <fa icon="bars"/>
                </div>
            </div>
            <a href="#" class="logo">TEAPLA</a>
            <form action="" method="post" class="search-form">
                <input type="text" name="search_box" placeholder="Поиск курсов" required maxlength="100">
                <button type="submit" class="search_box" name="search_box">
                    <fa icon="search"/>
                </button>
            </form>
            <div class="icons">
                <div @click="showProfile" id="user-btn">
                    <fa icon="user"/>
                </div>

            </div>
            <div v-if="isProfileVisible" class="profile">
                <img :src="image" alt="" class="expert">
                <h3>Райан Гослинг</h3>
                <span>Ученик</span>
                <a href="#" class="btn">Профиль</a>
                <div class="flex-btn">
                    <a href="#" class="option-btn">Войти</a>
                    <a href="#" class="option-btn">Регистрация</a>
                </div>
            </div>
        </section>
    </header>
  <!--side bar-->
    <div v-if="isSidebarVisible" class="side-bar">
        <div class="profile">
            <img :src="image" alt="" class="expert">
            <h3>Райан Гослинг</h3>
            <span>Ученик</span>
            <a href="#" class="btn">Профиль</a>
        </div>
        <nav class="navbar">
            <div class="icons">
                <Grid v-bind:arr="sidebar_menu"/>
            </div>
        </nav>
    </div>
  <!--side bar-->
    <section class="home-grid">
        <div class="box-container">
            <div class="box">
                <h3 class="title">Лайки и коментарии</h3>
                <p class="likes">Всего лайков: <span>25</span></p>
                <a href="#" class="inline-btn">Посмотреть лайки</a>
                <p class="likes">Всего коментариев: <span>12</span></p>
                <a href="#" class="inline-btn">Коментарии</a>
                <p class="likes">Сохраненные записи: <span>4</span></p>
                <a href="#" class="inline-btn">Записи</a>
            </div>
            <div class="box">
                <h3 class="title">Топ категорий</h3>
                <div class="flex">
                    <Grid v-bind:arr="sidebar_top_categories"/>
                </div>
            </div>
            <div class="box">
                <h3 class="title">Популярные курсы</h3>
                <div class="flex">
                    <Grid v-bind:arr="sidebar_top_courses"/>
                </div>
            </div>
            <div class="box">
                <h3 class="title">Стать преподавателем</h3>
                <p class="tutor">Рыбий текст</p>
                <a href="teachers.html" class="inline-btn">Начать</a>
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

</template>

<script>
import expert from "../components/img/expert.jpg";
import Grid from "../components/Grid.vue";


export default {
    components: {Grid},
    data() {
        return {
            image: expert,
            isProfileVisible: false,
            isSidebarVisible: false,
            sidebar_top_categories: [
                {id: 1, title: "Разработка", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 2, title: "Бизнес", icon: "chart-simple", href: "#", class: "default", gear: "LinkButton"},
                {id: 3, title: "Дизайн", icon: "pen", href: "#", class: "default", gear: "LinkButton"},
                {id: 4, title: "Маркетинг", icon: "chart-line", href: "#", class: "default", gear: "LinkButton"},
                {id: 5, title: "Музыка", icon: "music", href: "#", class: "default", gear: "LinkButton"},
                {id: 6, title: "Фото", icon: "camera", href: "#", class: "default", gear: "LinkButton"},
                {id: 7, title: "ПО", icon: "cog", href: "#", class: "default", gear: "LinkButton"},
                {id: 8, title: "Наука", icon: "vial", href: "#", class: "default", gear: "LinkButton"}
            ],
            sidebar_top_courses: [
                {id: 1, title: "HTML", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 2, title: "CSS", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 3, title: "javascript", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 4, title: "react", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 5, title: "PHP", icon: "code", href: "#", class: "default", gear: "LinkButton"},
                {id: 6, title: "bootstrap", icon: "code", href: "#", class: "default", gear: "LinkButton"}
            ],
            sidebar_menu: [
                {id: 1, title: "Домой", icon: "home", href: "#", class: "nav_link", gear: "LinkButton"},
                {id: 2, title: "О нас", icon: "question", href: "#", class: "nav_link", gear: "LinkButton"},
                {id: 3, title: "Курсы", icon: "graduation-cap", href: "#", class: "nav_link", gear: "LinkButton"},
                {id: 4, title: "Учителя", icon: "chalkboard-user", href: "#", class: "nav_link", gear: "LinkButton"},
                {id: 5, title: "Поддержка", icon: "headset", href: "#", class: "nav_link", gear: "LinkButton"}
            ]
        }
    },
    methods: {
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible
        },
        showSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible
        }
    },
    name: "Main"
}

</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
}

*::selection {
    background-color: #62B6CB;
    color: white;
}

*::-webkit-scrollbar {
    height: .5rem;
    width: 1rem;
}

*::-webkit-scrollbar-track {
    background-color: transparent;
}

*::-webkit-scrollbar-thumb {
    background-color: #62B6CB;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

section {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.sd-bar {
    font-size: 1.5rem;
    color: #454851;
    border-radius: .5rem;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    line-height: 3rem;
    background-color: #62B6CB;
    text-align: center;
}

.sd-bar:hover {
    background-color: #5FA8D3;
}

.btn,
.option-btn,
.delete-btn,
.inline-btn,
.inline-option-btn,
.inline-delete-btn {
    border-radius: .5rem;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    color: white;
    margin-top: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    text-align: center;
}

.btn,
.option-btn,
.delete-btn {
    display: block;
    width: 100%;
}

.inline-btn,
.inline-option-btn,
.inline-delete-btn {
    display: inline-block;
}

.btn,
.inline-btn {
    background-color: #62B6CB;
}

.option-btn,
.inline-option-btn {
    background-color: #62B6CB;
}

.delete-btn,
.inline-delete-btn {
    background-color: red;
}

.btn:hover,
.option-btn:hover,
.delete-btn:hover,
.inline-btn:hover,
.inline-option-btn:hover,
.inline-delete-btn:hover {
    background-color: #5FA8D3;
    color: white;
}

.flex-btn {
    display: flex;
    gap: 0.5rem
}

.header {
    background-color: #5FA8D3;
    border-bottom: white;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0;

}

.header .flex {
    padding: 1.5rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header .flex .logo {
    font-size: 2rem;
    color: white;
    font-weight: bolder;
}

.header .flex .search-form {
    width: 50rem;
    border-radius: .5rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    padding: 0.5rem 1rem;
    background-color: #62B6CB;
}

.header .flex .search-form input {
    width: 100%;
    background: none;
    font-size: 1rem;
    color: white;
}

.header .flex .search-form button {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    background: none;
}

.header .flex .search-form button:hover {
    color: #454851;
}

.header .flex .icons div {
    font-size: 1.5rem;
    color: #454851;
    border-radius: .5rem;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    line-height: 3rem;
    background-color: #62B6CB;
    text-align: center;
    margin-left: 1rem;
}

.header .flex .icons div:hover {
    background-color: #5FA8D3;
}

.header .flex .profile {
    position: absolute;
    top: 120%;
    right: 2rem;
    background-color: #5FA8D3;
    border-radius: .5rem;
    padding: 2rem;
    text-align: center;
    width: 30rem;
}

.header .flex .profile .expert {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: .5rem;

}

.header .flex .profile h3 {
    font-size: 2rem;
    color: white;
}

.header .flex .profile span {
    color: #454851;
    font-size: 1.5rem;
}

.side-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 30rem;
    background-color: #5FA8D3;
    border-right: white;
    margin-top: 100px;
    z-index: 100;
}

.side-bar .profile {
    padding: 3rem 2rem;
    text-align: center;
}

.side-bar .profile .expert {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: .5rem;
}

.side-bar .profile h3 {
    font-size: 2rem;
    color: white;
}

.side-bar .profile span {
    color: #454851;
    font-size: 1.5rem;
}

.side-bar .navbar {
    margin-top: 1rem;
}

.side-bar .navbar a {
    display: flex;
    padding-left: 40%;
    padding-top: 2rem;
    font-size: 1.2rem;

}

.side-bar .navbar a span {
    color: white;
    padding-left: 5px;
}

.side-bar .navbar a:hover i {
    margin-right: 2.5rem;

}

.side-bar .icons a {
    color: white;
}

.home-grid .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 25rem);
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
}

.home-grid .box-container .box {
    background-color: #5FA8D3;
    border-radius: .5rem;
    padding: 1rem;
    height: auto;
    width: auto;
}

.home-grid .box-container .box .title {
    font-size: 2rem;
    color: white;
}

.home-grid .box-container .box .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1rem;
}

.home-grid .box-container .flex a {
    background-color: #62B6CB;
    border-radius: .5rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
}

.home-grid .box-container .flex a i {
    margin-right: 1rem;
    color: white;
}

.home-grid .box-container .flex a span {
    color: white;
}

.home-grid .box-container .flex a:hover {
    background-color: #62B6CB;
}

.home-grid .box-container .flex a:hover span {
    color: white;
}

.home-grid .box-container .flex a:hover i {
    color: white;
}

.home-grid .box-container .tutor {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: white;
    line-height: 2;
}

.home-grid .box-container .likes {
    color: white;
    font-size: 1.5rem;
    margin-top: 1.5rem;
}

.home-grid .box-container .likes span {
    color: #FFFFFF;
}
/* courses */
#courses .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
    justify-content: center;
    align-items: flex-start;
}

#courses .box-container .box {
    border-radius: .5rem;
    background-color: var(--white);
    padding: 2rem;
}

#courses .box-container .box .tutor {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

#courses .box-container .box .tutor img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
}

#courses .box-container .box .tutor h3 {
    font-size: 1.8rem;
    color: var(--black);
    margin-bottom: .2rem;
}

#courses .box-container .box .tutor span {
    font-size: 1.3rem;
    color: var(--light-color);
}

#courses .box-container .box .thumb {
    position: relative;
}

#courses .box-container .box .thumb span {
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    background-color: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: 1.5rem;
}

#courses .box-container .box .thumb img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: .5rem;
}

#courses .box-container .box .title {
    font-size: 2rem;
    color: var(--black);
    padding-bottom: .5rem;
    padding-top: 1rem;
}

#courses .more-btn {
    text-align: center;
    margin-top: 2rem;
}

</style>