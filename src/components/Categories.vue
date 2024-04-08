<script>
import axios from 'axios';
export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/categories').then(({ data }) => {
      this.categories = data.payload.data;
    });
  },
};
</script>
<template>
  <main>
    <h1 class="title">Categorie</h1>
    <div class="row justify-content-center">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card col-md-3"
      >
        <RouterLink :to="`/category/${category.id}`" class="card-link">
          <div class="card-content">
            <img
              :src="category.img"
              class="category-image"
              alt="Immagine categoria"
            />
            <div class="card-body">
              <h5 class="card-title category-name">{{ category.name }}</h5>
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

.category-card {
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

.category-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;

  margin: 0 auto 10px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.category-name {
  color: #333;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Open Sans', 'sans-serif';
}
</style>
