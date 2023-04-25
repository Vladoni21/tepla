<template>
    <section id='container'>
      <canvas id="canvas1"/>
      <footer>Whoops 404!! The page is not available. <a href="#" @click.prevent="back">Go back</a> @2023!</footer>
    </section>
</template>
<script>
export default {
    methods: {
      back() {
        this.$router.go(-1);
      }
    },
    mounted() {
      let AnimScript = document.createElement('script')
      AnimScript.setAttribute('src', './views/error.js')
      document.head.appendChild(AnimScript)
    }
}
</script>
<style scoped>

h1 {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#container {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  width: 100%;
  height: 100%;
}
#canvas1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*filter: blur(10px) contrast(10);*/
}
footer, article {
  font-family: 'Helvetica', sans-serif;
  width: 100%;
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 1px #737373;
  background: rgba(255,255,255,0.4);
  left: 0;
  bottom: 20px;
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  padding-right: 20px;
}
footer a{
  color: gold;
}


</style>