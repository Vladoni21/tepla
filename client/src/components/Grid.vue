<template>
    <component v-bind:is="i.gear" v-for="i of arr" v-bind:item="i"/>
</template>

<script>
import LinkButton from "./gears/LinkButton.vue";
import LinkCourse from "./gears/LinkCourse.vue";


export default {
    name: "Grid",
    props: ['arr'],
    components: {LinkButton, LinkCourse}
}
</script>

<style scoped>

</style>