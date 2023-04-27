<template>
  <component v-bind:is="tag">
    <component v-bind:is="i.gear" v-for="i of arr" v-bind:item="i"/>
  </component>
</template>

<script>
import LinkButton from "./links/LinkButton.vue";
import LinkCourse from "./links/LinkCourse.vue";
import LinkExpert from "./links/LinkExpert.vue";
import NavItem from "./navigation/NavItem.vue";


export default {
    name: "Tag",
    props: ['arr', 'tag'],
    components: {LinkButton, LinkCourse, LinkExpert, NavItem}
}
</script>

<style scoped>

</style>