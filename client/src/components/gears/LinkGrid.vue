<template>
    <div class="flex">
        <LinkButton v-for="i of arr" v-bind:item="i"/>
    </div>
</template>

<script>
import LinkButton from "./LinkButton.vue";

export default {
    name: "LinkGrid",
    props: ['arr'],
    components: {LinkButton}
}
</script>

<style scoped>

</style>