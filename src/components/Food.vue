<script>
export default {
  data() {},
  props: {
    food: Object,
  },
  methods: {
    increment() {
      this.$store.commit('setQuantityCart', {
        count: this.currentQuantity + 1,
        food: this.food,
      });
    },
    decrement() {
      if (this.currentQuantity > 1) {
        this.$store.commit('setQuantityCart', {
          count: this.currentQuantity - 1,
          food: this.food,
        });
      } else {
        this.$store.commit('removeFromCart', this.food.id);
      }
    },
    addToCart(food) {
      if (this.canAddToCart) {
        this.$store.commit('setQuantityCart', {
          count: !this.currentQuantity
            ? this.currentQuantity + 1
            : this.currentQuantity,
          food: this.food,
        });
      }
    },
  },
  computed: {
    canAddToCart() {
      return (
        !this.$store.getters.getRestaurant ||
        this.$store.getters.getRestaurant === this.food.restaurant_id ||
        !this.$store.getters.getCart.length
      );
    },
    currentQuantity() {
      return (
        this.$store.getters.getCart.find(
          (cartItem) => cartItem.food.id === this.food.id
        )?.count ?? 0
      );
    },
  },
};
</script>

<template>
  <div class="food-card col-md-8 mt-4">
    <div class="card-content">
      <img :src="food.img" class="food-image" alt="Immagine cibo" />
      <div class="card-body">
        <h4 class="card-title food-name">{{ food.name }}</h4>

        <h6>{{ food.price }} €</h6>

        <div class="input-wrapper my-4" v-if="currentQuantity">
          <button @click="decrement()">-</button>
          <input
            type="number"
            min="1"
            :value="currentQuantity"
            class="pill-input"
          />
          <button @click="increment()">+</button>
        </div>
        <button
          class="button-style-4-cart"
          @click="addToCart"
          :disabled="!this.canAddToCart"
        >
          Aggiungi
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.food-card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 275px;
  a {
    text-decoration: none;
  }
}

.food-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.food-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.food-name {
  color: #333;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Open Sans', 'sans-serif';
}

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pill-input {
  border: none;
  padding: 5px 10px;
  width: 50px;
  text-align: center;
}

button {
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgba(246, 144, 30, 1);
  color: white;
  border: none;
  padding: 5px 10px;
  width: 35px;

  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f68e00;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-style-4-cart {
  width: 200px;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 8px 25px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease;
  border: none;
  background-color: rgba(246, 144, 30, 1);

  &:hover {
    background-color: #ffffff;
    color: black;
  }

  &[disabled] {
    cursor: not-allowed;
    background: #ccc;
    color: #333;
  }
}
</style>
