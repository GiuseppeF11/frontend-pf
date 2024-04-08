<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    link: String,
    image: String,
    name: String,
    price: Number,
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      const existingItem = this.cart.find((item) => item.id === food.id);
      if (existingItem) {
        existingItem.quantity += this.quantity;
      } else {
        this.cart.push({
          id: food.id,
          link: `/restaurant/${restaurant.id}`,
          name: this.name,
          quantity: this.quantity,
        });
      }
      this.quantity = 1;
    },
  },
};
</script>

<template>
  <div class="food-card col-md-8">
    <div class="card-content">
      <img :src="image" class="food-image" alt="Immagine cibo" />
      <div class="card-body">
        <a :href="link">
          <h4 class="card-title food-name">{{ name }}</h4>
        </a>
        <h6>{{ price }} €</h6>
        <button @click="decrement(food)">-</button>
        <input type="number" min="1" v-model="this.quantity" />
        <button @click="increment(food)">+</button>
        <button @click="addToCart(food)">Aggiungi</button>
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
</style>
