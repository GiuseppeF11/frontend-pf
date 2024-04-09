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
  <div class="food-card col-md-8 mt-4">
    <div class="card-content">
      <img :src="image" class="food-image" alt="Immagine cibo" />
      <div class="card-body">
        <a :href="link">
          <h4 class="card-title food-name">{{ name }}</h4>
        </a>
        <h6>{{ price }} €</h6>
        <div class="input-wrapper my-4">
          <button @click="decrement(food)">-</button>
          <input type="number" min="1" v-model="quantity" class="pill-input" />
          <button @click="increment(food)">+</button>
        </div>
        <a  @click="addToCart(food)" href="" class="button-style-4">Aggiungi</a>
          <!-- <button @click="addToCart(food)">Aggiungi</button> -->
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

.button-style-4 {
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
  }
</style>
