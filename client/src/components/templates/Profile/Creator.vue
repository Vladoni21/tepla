<template>
  <article class="card-list card">
    <div class="text-center">
      <h2>
        Создать новый курс
      </h2>
    </div>
    <form class="space-y-3" action="#" method="POST">
      <div class="space-y-2">
        <label class="dropdown">
          <div class="cover">
            <div class="cover">
              <div class="frame"><i class="material-icons" style="font-size: 3rem;">library_add</i></div>
            </div>
            <p class="pointer-none"><span>Нажмите, </span> чтобы настроить <br/> или <a style="text-decoration: underline; color: rgb(59, 130, 246);" class="text-blue-600 hover:underline">кликните</a> тут</p>
          </div>
          <input @click="showReg" style="visibility: hidden;">
        </label>
      </div>
    </form>
  </article>
  <PopUp is="Register" v-bind:func="showReg" v-bind:req="isRegVisible"/>
</template>

<script>
import PopUp from "../../containers/PopUp.vue";

export default {
  name: "Profile_Image",
  components: {PopUp},
  methods: {
    showReg() {
      this.isRegVisible = !this.isRegVisible
    }
  },
  data() {
    return {
      isRegVisible: false
    }
  },
}
</script>

<style scoped>

.card-list {
  width: 100%;
  max-width: 400px;
  height: 500px;
  margin-left: 2rem;
}

.card {
  background-color: #FFF;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 50px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  padding: 1.25rem;
  position: relative;
  transition: 0.15s ease-in;
}

.card:hover, .card:focus-within {
  box-shadow: 0 0 0 2px rgb(59 130 246), 0 10px 60px 0 rgba(0, 0, 0, 0.1);
  transform: translatey(-5px);
}

.frame {
  width: 55px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  max-height: 12rem;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;
}

.dropdown {
  display: flex;
  flex-direction: column;
  text-align: center !important;

  height: 15rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 0.3rem !important;

  border-width: 4px;
  border-style: dashed;

  margin-bottom: 0.5rem;
}

label, p {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));

  font-size: 0.875rem;
  line-height: 1.25rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.text-center {
  margin-top: 55px;
  text-align: center;
  padding: 20px;
}

a {
  color: inherit;
  text-decoration: inherit;

  cursor: pointer;
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}


[type=button], [type=reset], [type=submit], button {
  -webkit-appearance: button;
  background-image: none;
}

[role=button], button {
  cursor: pointer;
}

button, select {
  text-transform: none;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  border-color: rgb(23, 93, 208);
}
</style>