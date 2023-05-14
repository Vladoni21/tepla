<template>
    <header class="header">
        <Logo/>
        <div style="margin: 0 -10px 0 0; height: 60px; width: 430px; display: flex; justify-content: space-around">
          <SearchBar/>
          <LogBtn icon="person"/>
        </div>
    </header>
</template>

<script>
import Logo from "../templates/sub/navigation/NavLogo.vue";
import LogBtn from "../templates/sub/navigation/NavBtn.vue";
import SearchBar from "../templates/sub/navigation/NavSearch.vue";


export default {
    name: "Navbar",
    components: {LogBtn, SearchBar, Logo}
}
</script>

<style scoped>

.header {
    position: absolute;
    z-index: 3;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    background-color: #5FA8D3;
    border-bottom: white;
    min-width: 1400px;
    min-height: 80px;
}

.header a {
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

.header .nav-links {
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    width: fit-content;
    overflow: hidden;
}

.header .nav-links ul {
    display: flex;
    padding-right: 20px;
    padding-top: 30px;
}

.header .nav-links ul li {
    display: flex;
    margin: 0 25px;
}

.header .nav-links ul li.active a {
    color: #454851;
    font-weight: 600;
}
</style>
