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


  var button = document.getElementById('submit-button');

  braintree.dropin.create({
    authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
    selector: '#dropin-container'
  }, function (err, instance) {
    button.addEventListener('click', function () {
      console.log('ciao')
      instance.requestPaymentMethod(function (err, payload) {
        // Submit payload.nonce to your server
      });
    })
  });