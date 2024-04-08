<script>
import axios from 'axios';

export default {
  data() {
    return {
      category: {},
      searchTerm: '', // Aggiungi il termine di ricerca
    };
  },
  computed: {
    filteredRestaurants() {
      if (!this.searchTerm.trim()) {
        return this.category.restaurants;
      }
      return this.category.restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  mounted() {
    if (this.$route.params.categoryId) {
      axios
        .get(
          `http://127.0.0.1:8000/api/categories/${this.$route.params.categoryId}`
        )
        .then(({ data }) => {
          this.category = data.payload;
        });
    }
  },
};
</script>

<template>
  <main>
    <h1 class="title">{{ this.category.name }}</h1>
    <h2 class="subtitle">Ristoranti</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="searchTerm"
            placeholder="Inserisci il nome del ristorante..."
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.id"
        class="restaurant-card col-md-8"
      >
        <RouterLink :to="`/restaurant/${restaurant.id}`">
          <div>
            <img
              :src="restaurant.img"
              class="restaurant-image"
              alt="Immagine ristorante"
            />
            <div class="card-body">
              <h5 class="card-title restaurant-name">{{ restaurant.name }}</h5>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Lora', 'sans-serif';
  font-size: 4rem;
  color: white;
  text-align: center;
  margin: 30px;
}
.subtitle {
  font-family: 'Lora', 'sans-serif';
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 30px;
}
.restaurant-card {
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

.restaurant-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;

  margin: 0 auto 10px;
}

.restaurant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.restaurant-name {
  color: #333;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Open Sans', 'sans-serif';
}
</style>
