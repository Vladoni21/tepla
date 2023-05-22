import Vue, {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';

import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

import router from './router';

Vue.config.productionTip = false;

library.add(fas);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount('#app');
