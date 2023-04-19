<template>
  <section>
    <a href="#">Log In</a>
    <button>Sing Up</button>
  </section>
</template>

<script>
export default {
  name: "LogBtn"
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
  margin: 10px;
  background-color: white;
  color: #48abe0;
  border: none;
  border-radius: 15px;
  padding: 10px;
  height: 40px;
  width: 90px;
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