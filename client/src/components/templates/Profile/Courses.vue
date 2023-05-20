<template>
  <Card v-for="i of arr" v-bind:item="i"/>
</template>

<script>
import Card from "./card.vue";
import Tag from "../../containers/Tag.vue";
export default {
  name: "Courses",
  components: {Tag, Card},
  data() {
    return {
      arr: [
        { id: 1, title: "Ваш первый курс", subject: "Math", date: "Jun 10, 2005" },
        { id: 2, title: "Ваш второй курс", subject: "Math", date: "Jun 10, 2005" },
        { id: 3, title: "Тема с кирпичами ещё в силе", subject: "Math", date: "Jun 10, 2005" }
        // e.t.c.
      ]
    }
  }
}
</script>

<style scoped>

</style>
