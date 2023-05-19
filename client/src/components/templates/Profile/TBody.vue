<template>
  <tbody>
    <TItem v-for="i of arr" v-bind:item="i"/>
  </tbody>
</template>

<script>
import TItem from "./TItem.vue";

export default {
  name: "TBody",
  components: {TItem},
  props: ["arr"],
}
</script>

<style scoped>

</style>