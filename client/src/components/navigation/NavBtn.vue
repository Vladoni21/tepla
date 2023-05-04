<template>
  <section>
    <button id="show-modal" @click="showWel"><fa v-bind:icon="icon" class="fa"/></button>
  </section>
  <PopUp is="Welcome" v-bind:func="showWel" v-bind:req="isWelVisible"/>
</template>

<script>
import PopUp from "../containers/PopUp.vue";

export default {
  name: "LogBtn",
  props: ["icon"],
  components: {PopUp},
  data() {
    return {
      isWelVisible: false
    }
  },
  methods: {
    showWel() {
      this.isWelVisible = !this.isWelVisible
    }
  },
}
</script>

<style scoped>
section {
  /*
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
  */
  border-radius: 10px;
  width: fit-content;
  height: 100%;
  overflow: hidden;
  display: flex;
  margin: 0 5px;
}
a {
  text-align: center;
  margin: auto;
  color: white;
  padding: 10px;

}
a:hover {
  color: white;
  text-decoration: none;
}
button {
  background-color: white;
  color: #48abe0;
  border: none;
  border-radius: 60px;
  padding: 10px;
  height: 56px;
  width: 56px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:active {
  background-color: white;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

</style>