<template>
    <a v-bind:class="item.class" v-bind:href="item.href">
        <i><fa v-bind:icon="item.icon"/></i>
        <span v-text="item.title"/>
    </a>
</template>

<script>
export default {
    name: "LinkButton",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.default {
    background-color: #7BAE7F;
    border-radius: .5rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
}
.default i{
    margin-right: 1rem;
    color: white;
}
.default span{
    color: white;
}

.default a:hover{
    background-color: #73956F;
}

.default a:hover span{
    color:white;
}

.default a:hover i{
    color: white;
}
/*
.home-grid .box-container .flex a{
    background-color: #7BAE7F;
    border-radius: .5rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
}

.home-grid .box-container .flex a i{
    margin-right: 1rem;
    color: white;
}

.home-grid .box-container .flex a span{
    color: white;
}

.home-grid .box-container .flex a:hover{
    background-color: #73956F;
}

.home-grid .box-container .flex a:hover span{
    color:white;
}

.home-grid .box-container .flex a:hover i{
    color: white;
}
*/
</style>