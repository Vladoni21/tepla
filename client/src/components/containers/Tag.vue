<template>
  <component v-bind:is="tag">
    <component v-bind:is="i.gear" v-for="i of arr" v-bind:item="i"/>
  </component>
</template>

<script>
import LinkButton from "../gears/links/LinkButton.vue";
import LinkCourse from "../gears/links/LinkCourse.vue";
import LinkExpert from "../gears/links/LinkExpert.vue";
import NavItem from "../templates/sub/navigation/NavItem.vue";


export default {
    name: "Tag",
    props: ['arr', 'tag'],
    components: {LinkButton, LinkCourse, LinkExpert, NavItem}
}
</script>

<style scoped>

</style>