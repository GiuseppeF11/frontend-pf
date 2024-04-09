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
  <button><font-awesome-icon :icon="['fas', 'cart-shopping']" /></button>
  <div class="cart">
    <div class="item" v-for="cartItem in this.getCart" :key="cartItem.id">
      {{ cartItem.count }} x {{ cartItem.food.name }}
      <button @click="removeFromCart(cartItem.food.id)">-</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
