<template>
  <section class="container">
    <div class="loader" style="--t: 2s">
      <div class="particle" style="--dt: -1.4s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.02s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.51s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -1.63s"></div>
      <div class="particle"></div>
      <div class="particle" style="--dt: -0.85s"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PreLoaderNew"
}
</script>

<style scoped>
.container {
  display: grid;
  place-content: center;
  margin: 0;
  min-height: 100vh;
  background: #000;
  justify-content: center;
  align-content: center;
  max-width: initial;
  padding: 0;
}
.container:before {
  grid-column: 1;
  grid-row: 1;
  transform: scale(0.8);
  background: linear-gradient(90deg, #fde6bd, #a1c5ab, #f4dd51, #d11e48, #632f53);
  content: "";
}

.loader {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  padding: 6em;
  background: inherit;
  filter: blur(9px) contrast(18);
  mix-blend-mode: multiply;
}

.particle {
  width: 0;
  padding: 1.5em;
  border-radius: 50%;
  background: #fff;
}
.particle:first-child, .particle:last-child {
  padding: 0.75em;
}
.particle:nth-child(odd) {
  animation: pulse var(--t) ease-in-out var(--dt) infinite;
}
.particle:nth-child(2n) {
  transform: rotate(0deg) translate(3em);
  animation: spin var(--t) linear infinite;
}
.particle:nth-child(4n) {
  animation-direction: reverse;
  animation-duration: calc(1.2*var(--t));
}

@keyframes pulse {
  50% {
    transform: scale(1.8);
  }
  70% {
    transform: scale(0.6);
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn) translate(3em);
  }
}
</style>