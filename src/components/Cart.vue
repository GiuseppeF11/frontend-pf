<script>
export default {
  data() {
    return {};
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    removeFromCart(foodId) {
      this.$store.commit('removeFromCart', foodId);
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
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title title-cart" id="staticBackdropLabel">
        Carrello
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
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
  border-radius: 25%;
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  border: none;
  padding: 5px 10px;
  width: 35px;
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
