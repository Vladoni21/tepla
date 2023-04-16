<template>
    <section class="lined">
        <div class="navbar">
            <Logo/>
            <SearchBar/>
            <NavIcon/>
            <!--nav class="nav-links">
                <ul>
                    <li class="active"><a href="#">Главная</a></li>
                    <li><a href="#">Курсы</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Поддержка</a></li>
                </ul>
            </nav-->
        </div>
    </section>
</template>

<script>
import NavIcon from "./gears/navigation/NavIcon.vue";
import Logo from "./gears/navigation/Logo.vue";
import SearchBar from "./gears/navigation/SearchBar.vue";


export default {
    name: "Navbar",
    components: {SearchBar, NavIcon, Logo}
}
</script>

<style scoped>
.lined {
    height: 100px;
}

.navbar {
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



.navbar a {
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

.navbar .nav-links {
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    width: fit-content;
    overflow: hidden;
}

.navbar .nav-links ul {
    display: flex;
    padding-right: 20px;
    padding-top: 30px;
}

.navbar .nav-links ul li {
    display: flex;
    margin: 0 25px;
}

.navbar .nav-links ul li.active a {
    color: #454851;
    font-weight: 600;
}
</style>
