<template>
    <component v-bind:is="i.gear" v-for="i of arr" v-bind:item="i"/>
</template>

<script>
import LinkButton from "./gears/LinkButton.vue";
import LinkCourse from "./gears/LinkCourse.vue";
import LinkExpert from "./gears/LinkExpert.vue";


export default {
    name: "Grid",
    props: ['arr'],
    components: {LinkButton, LinkCourse, LinkExpert}
}
</script>

<style scoped>

</style>