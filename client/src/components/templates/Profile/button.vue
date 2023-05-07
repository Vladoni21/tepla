<template>
  <button type="submit" v-bind:class="color" class="p-button transition ease-in duration-300">{{ text }}</button>
</template>

<script>
export default {
  name: "button",
  props: ["color", "text"]
}
</script>

<style scoped>
.p-button {
  margin: 1.25rem 0.2rem;
  padding: 1rem;
  border-radius: 50px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.025em;
  font-weight: 600;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.blue {
  background: rgb(59 130 246);
  color: rgb(243 244 246);
}
.grey {
  background: #e5e5e5;
  color: #000000;
}
</style>