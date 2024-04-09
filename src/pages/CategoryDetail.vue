<script>
import axios from 'axios';

export default {
  data() {
    return {
      category: {},
      searchTerm: '',
    };
  },
  computed: {
    filteredRestaurants() {
      if (!this.searchTerm.trim()) {
        return this.category.restaurants;
      }
      return this.category.restaurants.filter(restaurant =>
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
    <h1 class="title mt-4">{{ category.name }}</h1>
    <h2 class="subtitle text-center mb-4">Ristoranti</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="input-group my-4">
          <input 
            type="text" 
            class="form-control rounded-pill custom-input" 
            v-model="searchTerm" 
            placeholder="Inserisci il nome del ristorante..."
          >
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.id"
        class="restaurant-card col-md-8"
      >
        <a :href="`/restaurant/${restaurant.id}`">
          <div class="card-content">
            <img
              :src="restaurant.img"
              class="restaurant-image"
              alt="Immagine ristorante"
            />
            <div class="card-body">
              <h5 class="card-title restaurant-pill">{{ restaurant.name }}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.title {
  font-family: "Paytone One", sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
}

.subtitle {
  font-size: 2rem;
  color: white;
  text-align: center;
}

.restaurant-card {
  position: relative;
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

.restaurant-pill {
  position: absolute;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgba(246, 144, 30, 1); 
  color: rgb(255, 255, 255);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 150px;
}

.form-control.rounded-pill.custom-input {
  border-radius: 25px; 
  outline: none !important; 
  box-shadow: none !important; 
}

.input-group.my-4 {
  max-width: 300px; 
  margin: 0 auto; 
}
</style>
