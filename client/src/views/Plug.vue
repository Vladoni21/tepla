<template>
  <section>
    <section class="figure">
      <article class="container">
      <Error></Error>
      <div class="message">
          <h1>404</h1>
          <p>It looks like you're lost...<br/>That's a trouble?</p>
          <button type="button">Go back</button>
        </div>
      <article class="field">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </article>
    </article>
    </section>
  </section>
</template>

<script>
import Error from "../components/gears/Error.vue";

export default {
  name: "Plug",
  components: {Error}
}
</script>

<style scoped>

.figure {
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-attachment: fixed;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3cpath d='M1073.038%2c220.465C1096.856%2c220.433%2c1118.02%2c206.868%2c1130.427%2c186.537C1143.428%2c165.233%2c1149.394%2c138.123%2c1136.229%2c116.92C1123.568%2c96.53%2c1097.006%2c92.855%2c1073.038%2c94.112C1051.607%2c95.236%2c1031.716%2c104.78%2c1020.372%2c122.996C1008.306%2c142.371%2c1004.534%2c166.608%2c1015.385%2c186.689C1026.733%2c207.691%2c1049.166%2c220.497%2c1073.038%2c220.465' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M714.9487577993233 262.1090910822285L771.6083463186338 155.79246030330722 666.3127937105055 157.63040101073463z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M918.5710822080549 227.28075817884422L874.8864264713415 133.59871163138453 781.2043799238818 177.28336736809803 824.8890356605953 270.96541391555775z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1126.7181383292277 84.6151846524991L1238.2845870951087 22.911813446301522 1143.770782735046-36.146966230655835z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1059.196%2c456.145C1100.593%2c456.993%2c1130.734%2c420.368%2c1149.446%2c383.431C1166.19%2c350.378%2c1165.333%2c312.768%2c1148.572%2c279.724C1129.797%2c242.709%2c1100.649%2c207.577%2c1059.196%2c205.505C1014.836%2c203.288%2c972.17%2c229.936%2c952.88%2c269.943C935.479%2c306.033%2c955.263%2c345.067%2c975.129%2c379.861C995.238%2c415.08%2c1018.649%2c455.315%2c1059.196%2c456.145' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M618.08790187177 100.00802913553063L777.694436596825 83.23270635984912 760.9191138211435-76.37382836520588 601.3125790960885-59.59850558952435z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1279.2456697697555 295.7667078480139L1396.7782039644926 150.90860774670952 1236.1888629553528 122.5923741126058z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M657.1199479855333 512.6643782347921L756.8545260985153 482.1724577033181 626.6280274540592 412.9298001218101z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M669.4752322779883 491.80330323330503L576.7485520964043 411.19722990972724 588.8691589544105 584.5299834148891z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M298.47227929535285 352.54486199394785L214.99329175356914 213.61249582076277 76.06092558038407 297.09148336254646 159.53991312216777 436.02384953573153z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1185.52%2c522.685C1227.428%2c524.066%2c1268.468%2c506.11%2c1290.666%2c470.537C1314.186%2c432.844%2c1318.108%2c384.582%2c1295.6%2c346.276C1273.353%2c308.415%2c1229.379%2c289.418%2c1185.52%2c291.594C1145.187%2c293.595%2c1112.162%2c320.861%2c1092.862%2c356.334C1074.481%2c390.118%2c1073.012%2c430.381%2c1091.728%2c463.981C1110.964%2c498.516%2c1146.01%2c521.383%2c1185.52%2c522.685' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M87.632%2c342.607C134.716%2c345.394%2c183.734%2c327.658%2c207.27%2c286.784C230.77%2c245.974%2c218.879%2c196.313%2c195.37%2c155.509C171.816%2c114.627%2c134.813%2c78.767%2c87.632%2c79.133C40.931%2c79.495%2c3.635%2c115.385%2c-17.249%2c157.158C-35.944%2c194.553%2c-30.339%2c237.548%2c-9.758%2c273.939C11.2%2c310.996%2c45.133%2c340.092%2c87.632%2c342.607' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M86.77124429995156 316.24461632668556L134.4688858187362 236.86241019046207 55.08667968251272 189.16476867167742 7.389038163728074 268.54697480790094z' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M705.526%2c141.877C743.136%2c142.017%2c777.457%2c121.826%2c796.926%2c89.647C817.144%2c56.231%2c821.987%2c14.727%2c803.162%2c-19.493C783.693%2c-54.883%2c745.9%2c-75.284%2c705.526%2c-76.498C662.786%2c-77.783%2c617.632%2c-63.228%2c597.162%2c-25.687C577.308%2c10.724%2c592.777%2c54.146%2c615.298%2c88.97C635.59%2c120.348%2c668.158%2c141.738%2c705.526%2c141.877' fill='rgba(48%2c 94%2c 143%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}

.container, .field {
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container:before, .container:after, .field:before, .field:after {
  content: "";
  background: linear-gradient(#203075, #233581);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container:before {
  border-radius: 0;
}

.container:before, .field:before {
  background: linear-gradient(#233581, #203075);
}


.container:before {
  width: 101vmax;
  height: 61vmax;
  z-index: -4;
}

.container:after {
  height: 50vmax;
  width: 50vmax;
  z-index: -3;
}

.field {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  text-shadow: 0 30px 10px rgba(0, 0, 0, 0.15);
}

.field:before {
  height: 35vmax;
  width: 35vmax;
  z-index: -2;
}

.field:after {
  height: 20vmax;
  width: 20vmax;
  z-index: -1;
}

.message {
  /* width: 40%;
  height: 60%;
  border-radius: 30px;
  background: #61a5e8; */
  position: absolute;
  text-align: center;
  z-index: 8;
  color: white;
}

button {
  background: linear-gradient(#EC5DC1, #D61A6F);
  padding: 0 12px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  outline: none;
  color: #FFF;
  font: 400 16px/2.5 Nunito, "Varela Round", Sans-serif;
  text-transform: uppercase;
  cursor: pointer;
}

.bubble {
  background: linear-gradient(#EC5DC1, #D61A6F);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
}

.bubble:before, .bubble:after {
  content: "";
  background: linear-gradient(#EC5DC1, #D61A6F);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
}

.bubble:nth-child(1) {
  top: 15vh;
  left: 15vw;
  height: 22vmin;
  width: 22vmin;
}

.bubble:nth-child(1):before {
  width: 13vmin;
  height: 13vmin;
  bottom: -25vh;
  right: -10vmin;
}

.bubble:nth-child(2) {
  top: 20vh;
  left: 38vw;
  height: 10vmin;
  width: 10vmin;
}

.bubble:nth-child(2):before {
  width: 5vmin;
  height: 5vmin;
  bottom: -10vh;
  left: -8vmin;
}

.bubble:nth-child(3) {
  top: 12vh;
  right: 30vw;
  height: 13vmin;
  width: 13vmin;
}

.bubble:nth-child(3):before {
  width: 3vmin;
  height: 3vmin;
  bottom: -15vh;
  left: -18vmin;
  z-index: 6;
}

.bubble:nth-child(4) {
  top: 25vh;
  right: 18vw;
  height: 18vmin;
  width: 18vmin;
}

.bubble:nth-child(4):before {
  width: 7vmin;
  height: 7vmin;
  bottom: -10vmin;
  left: -15vmin;
}

.bubble:nth-child(5) {
  top: 60vh;
  right: 18vw;
  height: 28vmin;
  width: 28vmin;
}

.bubble:nth-child(5):before {
  width: 10vmin;
  height: 10vmin;
  bottom: 5vmin;
  left: -25vmin;
}
</style>