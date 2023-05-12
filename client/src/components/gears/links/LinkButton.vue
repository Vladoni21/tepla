<template>
    <a v-bind:class="item.class" v-bind:href="item.href">
        <i class="material-icons" v-bind:icon="item.icon">{{item.icon}}</i>
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
    background-color: #62B6CB;
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
    background-color: #5FA8D3;
}
.default a:hover span{
    color:white;
}
.default a:hover i{
    color: white;
}

.nav_link {
    color: white;
    display: flex;
    padding-left: 40%;
    padding-top: 2rem;
    font-size: 1.2rem;

}
.nav_link span {
    color: white;
    padding-left: 5px;
}
.material-icons {
    padding-top: 5px;
    font-size: 3rem;
}
</style>