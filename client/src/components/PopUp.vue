<template>
  <slot>
    <Transition name="shadow">
      <article class="mask" v-if="req"/>
    </Transition>
    <Transition name="popup">
      <section class="blank" v-if="req" >
        <article class="escape" @click="func"/>
        <component v-bind:is="is" style="z-index: 1002"/>
      </section>
    </Transition>
  </slot>
</template>

<script>
import Welcome from "./forms/Welcome.vue"
import Register from "./forms/Register.vue";

export default {
  name: "PopUp",
  props: ["is", "func", "req"],
  components: {Register, Welcome}
}
</script>

<style scoped>

.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.escape {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.blank {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow-enter,
.shadow-leave-active {
  opacity: 0;
  --webkit--transform: scale(1.1);
  transform: scale(1.1);
}

.popup-enter-active {
  animation: popup-in 0.5s;
}
.popup-leave-active {
  animation: popup-in 0.5s reverse;
}
@keyframes popup-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>