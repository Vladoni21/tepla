<template>
    <h1>
       <p class="center">{{ $route.params.courseID }} JavaSC course</p> 
    </h1>
    <div class="card" v-for="x in description"> 
        <h2 class="name">{{ x.title }}</h2>
        <p class="info" >{{ x.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            description:[
                {title:"Описание", description: "Освойте профессию разработчика на JavaScript, чтобы писать сайты и анимировать их содержимое. Вы сможете создавать интерактивные и динамические веб-приложения, используя всю мощь доступных в браузере технологий. Изучите фреймворки и библиотеки, упрощающие вашу работу, на которую вы сможете трудоустроиться уже через 9 месяцев обучения."} ,
            ] 
        }
    }
};
</script>


<style scoped>
.card{
    background-color: blue;
    padding: 20px;
    margin: 10px;
    color: beige;
    border-radius: 20px;
    border: 2px solid black;
    transition: 0.5s;
}
.info{
    margin: 0px;
}
.center {
  text-align: center;
}
</style>