<template>
    <h1>
        <p class="center">Courses </p>
    </h1>
    <router-link class="card" v-for="x in courses" :to="`/courses/${x.nomber}`"> 
        <h2 class="name">{{ x.title }}</h2>
        <p class="info" >{{ x.description }}</p>
    </router-link>
</template>

<script>
export default {
    data() {
        return{
            courses:[
                {nomber:"1", title:"JavaSC course", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."} ,
                {nomber:"2", title:"Python course", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} 
            ] 
        }
    }
};
</script>


<style scoped>
.card{
    background-color: blue;
    padding: 20px;
    margin: 10px auto;
    color: beige;
    border-radius: 20px;
    border: 2px solid black;
    transition: 0.5s;
    width: 350px;
}
.card:hover{
    background-color: black;
}
.info{
    margin: 0px;
}
.center {
  text-align: center;
}
</style>