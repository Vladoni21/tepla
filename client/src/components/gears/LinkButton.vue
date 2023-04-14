<template>
    <a v-bind:href="item.href">
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

</style>