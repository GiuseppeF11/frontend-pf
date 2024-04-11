<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Cart from './components/Cart.vue';

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
    Cart,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
    <div class="absolute-buttons">
      <Cart />
      <button class="scroll-to-top-button" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@import 'assets/scss/partials/reset';

.scroll-to-top-button {
  cursor: pointer;
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  font-size: 16px;
  transition: 0.2s ease-in;

  &:hover {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }
}

.absolute-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
}


</style>
