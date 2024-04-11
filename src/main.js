import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import * as bootstrap from 'bootstrap';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping, faTrashCan, faBurger, faTruckFast, faSeedling);

createApp(App)
  .use(router)
  .use(store)
  .use(Vuex)
  /* .component('font-awesome-icon', FontAwesomeIcon) */
  .mount('#app');
