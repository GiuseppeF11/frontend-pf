<script>
import CartItem from './CartItem.vue';
export default {
  components: {
    CartItem,
  },
  data() {
    return {};
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
    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
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
    <div class="offcanvas-header">
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
    <div class="offcanvas-body">
      <div class="cart">
        <div class="item" v-for="cartItem in this.getCart" :key="cartItem.id">
          <CartItem :cartItem="cartItem" />
        </div>
        <div class="my-checkout d-flex justify-content-center">
          <router-link
            class="btn my-checkout-btn mb-3"
            :to="{ name: 'credentials' }"
          >
            Check Out <font-awesome-icon icon="fa-solid fa-arrow-right pl-2" />
          </router-link>
        </div>
      </div>
      <hr />
      <h4>Totale: {{ totalPrice }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-cart {
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  border: none;
  padding: 5px 10px;
  width: 50px;
  &.button-cart:hover {
    color: white;
    background-color: transparent;
    border: 1px solid white;
  }
}
.title-cart {
  font-family: 'Lora', 'sans serif';
  font-size: 2.5rem;
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
  padding: 5px 10px;
  width: 40px;
  margin-bottom: 5px;
}
</style>
