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
      this.$store.commit('toggleCart', true);
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
      this.$store.commit('toggleCart', true);
    },
    addToCart(food) {
      if (this.canAddToCart) {
        this.$store.commit('setQuantityCart', {
          count: !this.currentQuantity
            ? this.currentQuantity + 1
            : this.currentQuantity,
          food: this.food,
        });
        this.$store.commit('toggleCart', true);
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
    <div>
      <a :href="`/food/${food.id}`" style="text-decoration: none">
        <img :src="food.img" class="food-image" alt="Immagine cibo" />
        <div class="card-body">
          <h4 class="card-title food-name">{{ food.name }}</h4>
          <h6 class="text-dark">{{ food.price }} €</h6>
          <!-- <div class="input-wrapper my-4" v-if="currentQuantity">        
            <button @click="decrement()">-</button>
            <input
              type="number"
              min="1"
              :value="currentQuantity"
              class="pill-input"
            />
            <button @click="increment()">+</button>
          </div> -->
        </div>
      </a>
    </div>
    <div class="d-flex justify-content-center" v-if="food.availability === 1">
      <button
        class="button-style-4-cart text-button"
        @click.stop="addToCart"
        :disabled="!this.canAddToCart"
      >
        Aggiungi
      </button>
    </div>
    <div
      class="badge py-1 px-3"
      :class="food.availability === 1 ? 'bg-success' : 'bg-danger'"
    >
      {{ food.availability === 1 ? 'Disponibile' : 'Non disponibile' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.food-card {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 10px rgb(108, 108, 108);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 275px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.09);
  }
}

.food-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 10px;
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
.text-button {
  font-family: 'Open Sans', 'sans-serif';
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
  width: auto;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 5px 15px;
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
