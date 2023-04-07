<template>
<!--header-->
  <header class="header">
      <section class="flex">
        <a href="#" class="logo">TEAPLA</a>
        <form action="" method="post" class="search-form">
            <input type="text" name="search_box" placeholder="Поиск курсов" required maxlength="100">
            <button type="submit" class="search_box" name="search_box">
                <fa icon="search"/>
            </button>
        </form>
        <div class="icons">
            <div @click="showProfile" id="user-btn"><fa icon="user"/></div>
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
</template>

<script>
import expert from "./img/expert.jpg";

export default {
    data(){
        return{
            image: expert,
            isProfileVisible: false
        }
    },
    methods: {
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible
        }
    },
    name: "Main"
}

</script>

<style scoped>
*{
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
}
*::selection{
    background-color: #7BAE7F;
    color: white;
}
*::-webkit-scrollbar{
    height: .5rem;
    width: 1rem;
}
*::-webkit-scrollbar-track{
    background-color: transparent;
}
*::-webkit-scrollbar-thumb{
    background-color: #7BAE7F;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
section{
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}
.btn,
.option-btn,
.delete-btn,
.inline-btn,
.inline-option-btn,
.inline-delete-btn{
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
.delete-btn{
    display: block;
    width: 100%;
}

.inline-btn,
.inline-option-btn,
.inline-delete-btn{
    display: inline-block;
}

.btn,
.inline-btn{
    background-color: #7BAE7F;
}

.option-btn,
.inline-option-btn{
    background-color: #7BAE7F;
}

.delete-btn,
.inline-delete-btn{
    background-color: red;
}

.btn:hover,
.option-btn:hover,
.delete-btn:hover,
.inline-btn:hover,
.inline-option-btn:hover,
.inline-delete-btn:hover{
    background-color: #73956F;
    color: white;
}

.flex-btn{
    display: flex;
    gap: 0.5rem
}
.header{
    background-color: #95D7AE;
    border-bottom: white;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0;

}
.header .flex{
    padding: 1.5rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .flex .logo{
    font-size: 2rem;
    color: white;
    font-weight: bolder;
}
.header .flex .search-form{
    width: 50rem;
    border-radius: .5rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    padding: 0.5rem 1rem;
    background-color: #7BAE7F;
}
.header .flex .search-form input{
    width: 100%;
    background: none;
    font-size: 1rem;
    color: white;
}
.header .flex .search-form button{
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    background: none;
}
.header .flex .search-form button:hover{
    color: #454851;
}
.header .flex .icons div{
    font-size: 1.5rem;
    color: #454851;
    border-radius: .5rem;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    line-height: 3rem;
    background-color: #7BAE7F;
    text-align: center;
    margin-left: 1rem;
}
.header .flex .icons div:hover{
    background-color: white;
}

.header .flex .profile{
    position: absolute;
    top: 120%;
    right: 2rem;
    background-color: #95D7AE;
    border-radius: .5rem;
    padding: 2rem;
    text-align: center;
    width: 30rem;
}

.header .flex .profile .expert{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: .5rem;

}
.header .flex .profile h3{
    font-size: 2rem;
    color: white;
}
.header .flex .profile span{
    color: #454851;
    font-size: 1.5rem;
}
</style>