<script>
import CartItem from './CartItem.vue';
import {store} from '../store/store.js';
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      store,
      
      

    };
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
    hasElementsInCart() {
      return this.$store.getters.showCart;
    },
    totalPrice() {
      let total = 0;
      for (let item of this.getCart) {
        total += item.food.price * item.count;
      }
      return total.toFixed(2);
    },
  },
  methods: {
    hideCart() {
      this.$store.commit('toggleCart', false);
    },
    showCart() {
      this.$store.commit('toggleCart', true);
    },
    
    
  },
};
</script>

<template>
  <button class="button-cart" type="button" @click="showCart">
    <i class="fa-solid fa-cart-shopping"></i>
  </button>
  <div
    class="offcanvas offcanvas-end"
    :class="hasElementsInCart ? 'show' : ''"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
    data-bs-scroll="true"
    data-bs-backdrop="false"
  >
    <div class="offcanvas-header m-2">
      <h5 class="offcanvas-title title-cart" id="staticBackdropLabel">
        Carrello
      </h5>
      <button
        type="button"
        class="btn-close button-close"
        aria-label="Close"
        @click="hideCart"
      ></button>
    </div>
    <div class="offcanvas-body m-4">
      <div class="cart">
        <div class="item" v-for="cartItem in this.getCart" :key="cartItem.id">
          <CartItem :cartItem="cartItem" />
        </div>
      </div>
      <hr />
      <h4 class="total">Totale: € {{ totalPrice }}</h4>

      <div class="my-checkout my-5 d-flex justify-content-center">
          <router-link class="checkout-button mb-3"
              :to="{ name: 'credentials' }">
              Check Out <font-awesome-icon icon="fa-solid fa-arrow-right pl-2" />
          </router-link>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.offcanvas {
  border: none !important;
    box-shadow: none !important;
    outline: 1px solid #BC3431;
}

.button-cart {
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  border: none;
  height: 50px;
  width: 50px;
  transition: 0.2s ease-in;
  &.button-cart:hover {
    color: white;
    background-color: transparent;
    border: 1px solid white;
  }
}
.title-cart {
	font-family: 'Paytone One', sans-serif;
	color: #BC3431;
  font-size: 24px;
	margin-bottom: 0;
	line-height: 1.5;
}

h4 {
  font-family: 'Paytone One', sans-serif;
	color: #BC3431;
  font-size: 24px;
	margin-bottom: 0;
	line-height: 1.5;
}

hr {
	color: #BC3431;
}

.button-close {
  width: 20px;
}
.item {
  font-family: 'Open Sans', 'sans serif';
  font-size: 1.3rem;
}

button {
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgba(246, 144, 30, 1);
  color: white;
  border: none;
  padding: 15px;
  width: 50px;
  margin-bottom: 5px;
}

button:focus,
    button:active {
    outline: none;
    box-shadow: none;
}

.checkout-button {
  display: inline-block;
  text-decoration: none;
  color:white;
  border: 1px solid transparent;
  padding: 8px 20px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  background-color: #BC3431;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
.checkout-button:hover {
  color: #BC3431;
  background-color: transparent;
  border: 1px solid #BC3431;
}

.button-style-3 a {
  text-decoration: none;
}
</style>
