import { createStore } from 'vuex';

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
      }
    },
    removeFromCart(id) {},
  },
  actions: {},
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
});
