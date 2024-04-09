import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  key: 'fastbites', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
});

export default createStore({
  state: {
    cart: [],
    restaurant: '',
  },
  mutations: {
    addToCart(state, item) {
      let i = 0;
      while (i < state.cart.length && item.food.id !== state.cart[i].food.id) {
        i++;
      }
      if (i < state.cart.length) {
        state.cart[i].count += item.count;
      } else {
        state.cart.push(item);
        state.restaurant = item.food.restaurant_id;
      }
    },
    setQuantityCart(state, item) {
      let i = 0;
      while (i < state.cart.length && item.food.id !== state.cart[i].food.id) {
        i++;
      }
      if (i < state.cart.length) {
        state.cart[i].count = item.count;
      } else {
        state.cart.push(item);
        state.restaurant = item.food.restaurant_id;
      }
    },
    removeFromCart(state, id) {
      let i = 0;

      while (i < state.cart.length && id !== state.cart[i].food.id) {
        i++;
      }
      if (i < state.cart.length) {
        state.cart.splice(i, 1);
      }
    },
  },
  actions: {},
  getters: {
    getRestaurant(state) {
      return state.restaurant;
    },
    getCart(state) {
      return state.cart;
    },
  },
  plugins: [vuexLocalStorage.plugin],
});
