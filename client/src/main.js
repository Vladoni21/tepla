import Vue from 'vue';
import App from './App.vue'
// ! import VueRouter from 'vue-router'

import {createApp} from 'vue'
// ! import {index} from "./router";

import {fas} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './app.scss'
// import './assets/main.css'


Vue.config.productionTip = false

// ! Vue.use(index)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(fas)
createApp(App).component('fa', FontAwesomeIcon).mount('#app')
