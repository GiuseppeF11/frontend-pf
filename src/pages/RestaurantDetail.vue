<script>
import axios from 'axios';
import Food from '../components/Food.vue';
export default {
  data() {
    return {
      restaurant: {},
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
  methods: {
    addToCart(count, food) {
      if (
        !this.$store.getters.getRestaurant ||
        this.$store.getters.getRestaurant === food.restaurant_id
      ) {
        this.$store.commit('addToCart', {
          count,
          food,
        });
      } else {
        alert('Non puoi acquistare da ristoranti diversi.');
      }
    },
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
    <h1 class="title">{{ this.restaurant.name }}</h1>
    <h2 class="subtitle">Menù</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="searchTerm"
            placeholder="Inserisci il nome del cibo..."
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <Food
        v-for="food in filteredFoods"
        :key="food.id"
        :image="food.img"
        :name="food.name"
        :price="food.price"
        @addToCart="addToCart($event, food)"
      />
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
</style>
