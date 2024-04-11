<script>
import axios from 'axios';
import Food from '../components/Food.vue';
export default {
  data() {
    return {
      restaurant: { foods: [] }, // Inizializza restaurant.foods come un array vuoto
      searchTerm: '',
    };
  },
  components: {
    Food,
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
  computed: {
    filteredFoods() {
      if (!this.searchTerm.trim()) {
        return this.restaurant.foods;
      }
      return this.restaurant.foods.filter((food) =>
        food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <main>
    <h1 class="title mt-4">{{ this.restaurant.name }}</h1>
    <h2 class="subtitle text-center mb-4">Menù</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="input-group mb-4">
          <input
            type="text"
            class="form-control rounded-pill custom-input text-input"
            v-model="searchTerm"
            placeholder="Inserisci il nome del cibo..."
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div v-if="filteredFoods.length === 0" class="allert-subtitle text-center mt-3 mb-5">
        <p>Nessun cibo presente</p>
      </div>
        <Food v-else v-for="food in filteredFoods" :key="food.id" :food="food" />
    </div>
  </main>
</template>


<style lang="scss" scoped>
.title {
  font-family: 'Paytone One', sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 2rem;
  color: white;
  text-align: center;
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
.text-input {
  font-family: 'Open Sans', sans-serif;
}

.allert-subtitle {
  font-family: 'Open Sans', 'sans-serif';
  font-size: 1.2rem;
  color: white;
  text-align: center;
  font-style: italic;
}
</style>
