import Vue from 'vue';
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {createApp} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import './app.scss'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

library.add(fas)
createApp(App).component('fa', FontAwesomeIcon).mount('#app')
