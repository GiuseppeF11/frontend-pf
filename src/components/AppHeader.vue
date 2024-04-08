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
    <RouterLink to="/">
      <img
        src="/public/img/logoscritta.png"
        height="120px;"
        style="padding-left: 40px"
      />
    </RouterLink>

    <div style="float: right; padding-top: 40px; padding-right: 50px">
      <RouterLink to="/">
        <button
          style="
            border-radius: 25px;
            margin-right: 20px;
            background-color: transparent;
            color: white;
            padding: 5px;
          "
        >
          <i class="bi bi-person"></i> Login
        </button>
      </RouterLink>
      <Cart />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
