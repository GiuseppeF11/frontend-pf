<script>
export default {
  data() {
    return {};
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
    showCart() {
      return this.$store.getters.showCart;
    },
  },
  methods: {
    removeFromCart(foodId) {
      this.$store.commit('removeFromCart', foodId);
    },
    hideCart() {
      this.$store.commit('toggleCart', false);
    },
  },
};
</script>

<template>
  <button
    class="button-cart"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
  </button>
  <div
    class="offcanvas offcanvas-start"
    :class="showCart ? 'show' : ''"
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
        class="btn-close"
        aria-label="Close"
        @click="hideCart"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="cart">
        <div class="item" v-for="cartItem in this.getCart" :key="cartItem.id">
          {{ cartItem.count }} x {{ cartItem.food.name }}
          <button @click="removeFromCart(cartItem.food.id)">-</button>
        </div>
      </div>
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
  width: 35px;
}
</style>
