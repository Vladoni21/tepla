<template>
  <li>
    <a v-bind:class="item.class" v-bind:href="item.href">
      <i class="fa fa-home fa-lg"><fa v-bind:icon="item.icon"/></i>
      <span class="nav-text" v-text="item.title"/>
    </a>
  </li>
</template>

<script>
export default {
  name: "NavItem",
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