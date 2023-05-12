<template>
  <form>
    <div class="select animated zoomIn">
      <input type="radio" name="option">
      <i class="toggle icon icon-arrow-down"></i>
      <i class="toggle icon icon-arrow-up"></i>
      <span class="placeholder">Ответ...</span>
      <selector-item v-for="i of arr" v-bind:item="i"/>
    </div>
  </form>
</template>

<script>
import SelectorItem from "./selector-item.vue";

export default {
  name: "selector",
  components: {SelectorItem},
  props: ["arr"]
}
</script>

<style scoped>

.select {
  position: relative;
  overflow: hidden;
  display: block;
  margin: auto;
  width: 330px;

  border-bottom: 0;
  border-radius: 3px;
  font-size: 12px;
  box-shadow: 0 1em 2em -1.5em rgba(0, 0, 0, 0.5);
}

.select > i.toggle {
  position: absolute;
  z-index: 4;
  right: 1.5em;
  top: 1.6em;
  color: #ccc;
}

.select .placeholder {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 1.5em 2em;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.select > input {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  cursor: pointer;
}
.select > input:checked ~ i.toggle.icon-arrow-down {
  display: none;
}
.select > input:checked ~ i.toggle.icon-arrow-up {
  display: block;
}

.select > input:not(:checked) {
  z-index: 4;
}

.select > input:not(:checked) ~ i.toggle.icon-arrow-up {
  display: none;
}
.select > input:not(:checked) ~ i.toggle.icon-arrow-down {
  display: block;
}
.select > input:disabled {
  cursor: no-drop;
}
.select > span.placeholder {
  position: relative;
  z-index: 0;
  display: inline-block;
  width: 100%;
  color: #999;
  border-top: 0;
}

.select label.option input {
  display: none;
}

i.toggle {
  position: absolute;
  z-index: 4;
  right: 1.5em;
  top: 1.6em;
  color: #ccc;
}

.placeholder {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 1.5em 2em;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
</style>