<script>
import axios from 'axios';
import Food from '../components/Food.vue';
export default {
  data() {
    return {
      restaurant: {},
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
  methods: {},
};
</script>

<template>
  <main>
    <h1 class="title">{{ this.restaurant.name }}</h1>
    <h2 class="subtitle">Menù</h2>
    <div class="row justify-content-center">
      <Food
        v-for="food in this.restaurant.foods"
        :key="food.id"
        :image="food.img"
        :name="food.name"
        :price="food.price"
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
