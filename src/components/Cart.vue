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
  methods: {},
};
</script>

<template>
  <button><font-awesome-icon :icon="['fas', 'cart-shopping']" /></button>
  <div class="cart">
    <div class="item" v-for="cartItem in this.getCart" :key="cartItem.id">
      {{ cartItem.count }} x {{ cartItem.food.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
