<script>
import Cart from './Cart.vue';
export default {
  data() {
    return {};
  },
  components: {
    Cart,
  },
  methods: {},
};
</script>

<template>
  <header>
    <img src="C:\MAMP\htdocs\classe114\frontend-pf\logoscritta.png" height="120px;" style="padding-left: 40px;">
    <div style="float: right; padding-top: 40px; padding-right: 50px;">
      <a href="/">
        <button style="border-radius: 25px; margin-right: 20px; background-color: transparent; color: white; padding: 5px;"><i class="bi bi-person"></i> Login</button>
      </a>
        <Cart />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
