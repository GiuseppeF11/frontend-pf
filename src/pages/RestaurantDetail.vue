<script>
import axios from 'axios';
export default {
  data() {
    return {
      restaurant: {},
    };
  },
  mounted() {
    if (this.$route.params.restaurantId) {
      axios
        .get(
          `http://127.0.0.1:8000/api/restaurants/${this.$route.params.restaurantId}`
        )
        .then(({ data }) => {
          this.restaurant = data.payload;
        });
    }
  },
};
</script>

<template>
  <main>
    <h1 class="title">{{ this.restaurant.name }}</h1>
    <h2 class="subtitle">Menù</h2>
    <div class="row justify-content-center">
      <div
        v-for="food in this.restaurant.foods"
        :key="food.id"
        class="food-card col-md-8"
      >
        <div class="card-content">
          <img :src="food.img" class="food-image" alt="Immagine cibo" />
          <div class="card-body">
            <a :href="`/restaurant/${restaurant.id}`">
              <h4 class="card-title food-name">{{ food.name }}</h4>
            </a>
            <h6>{{ food.price }} €</h6>
            <button>-</button>
            <input type="number" />
            <button>+</button>
            <button>Aggiungi</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Lora', 'sans-serif';
  font-size: 3rem;
  color: white;
  margin: 30px;
}
.subtitle {
  font-family: 'Lora', 'sans-serif';
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 30px;
}
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
