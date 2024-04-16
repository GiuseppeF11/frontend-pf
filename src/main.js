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
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(
  faCartShopping,
  faTrashCan,
  faBurger,
  faTruckFast,
  faSeedling,
  faArrowRight
);

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresCart || store.getters.getCart.length) {
    next();
  } else {
    next('/');
  }
});

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
