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
    <nav class="navbar">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <router-link class="navbar-brand" to="/"> 
            <img src="/public/img/logoscritta.png" alt="logo">
          </router-link>
        </div>
        
        <div class="d-flex">

          <a class="button-style-3" href=":">
            Sei gia un nostro partner?
          </a>

          <a class="button-style-3" href="/">
            Diventa un nostro partner!
          </a>
          <Cart/>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 200px;

  img {
    width: 100%;
  }
}

.button-style-3 {
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border: 1px solid transparent;
  padding: 8px 20px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  background-color: white;
  transition: background-color 0.3s ease, border-color 0.3s ease; 
}

.button-style-3:hover {
  color: white;
  background-color: transparent;
  border: 1px solid white; 
}

.button-style-3 a {
  text-decoration: none;
}
</style>
