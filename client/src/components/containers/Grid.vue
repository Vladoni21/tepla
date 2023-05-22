<template>
    <component v-bind:is="i.gear" v-for="i of arr" v-bind:item="i" />
</template>

<script>
import LinkButton from '../gears/links/LinkButton.vue';
import LinkCourse from '../gears/links/LinkCourse.vue';
import LinkExpert from '../gears/links/LinkExpert.vue';


export default {
    name: 'Grid', props: ['arr'], components: { LinkButton, LinkCourse, LinkExpert },
};
</script>

<style scoped>

</style>