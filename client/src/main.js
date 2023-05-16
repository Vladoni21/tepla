import Vue from 'vue'
import App from './App.vue'

import {createApp} from 'vue'

import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './app.scss'

import router from './router'

Vue.config.productionTip = false

library.add(fas)

const app = createApp(App)
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
