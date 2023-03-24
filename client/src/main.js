import Vue from "vue";
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {createApp} from 'vue'
import './app.scss'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
createApp(App).mount('#app')
