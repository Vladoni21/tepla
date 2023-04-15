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


.navbar {
    display: flex;
    padding-left: 40%;
    padding-top: 2rem;
    font-size: 1.2rem;

}
.navbar span {
    color: white;
    padding-left: 5px;
}

.navbar:hover i {
    margin-right: 2.5rem;
}
</style>