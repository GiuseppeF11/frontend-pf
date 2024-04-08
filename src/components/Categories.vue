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
      <div class="container pb-5">
        <h1 class="title pb-4">Categorie</h1>
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center">
          <div v-for="category in categories" :key="category.id" class="category-card col-md-3">
            <a :href="`/category/${category.id}`" class="card-link">
              <div class="card-content">
                <img :src="category.img" class="category-image" alt="Immagine categoria" />
                <div class="card-body">
                  <h5 class="card-title category-name category-pill">{{ category.name }}</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
</template>

<style lang="scss" scoped>
.title {
  font-family: "Paytone One", sans-serif;
  // font-family: 'Lora', 'sans-serif';
  font-size: 3rem;
  // font-size: 4rem;
  color: white;
  text-align: center;
  margin: 30px;
}

.category-card {
  position: relative;
  // background-color: rgba(255, 255, 255, 0.7);
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
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.card-body {
  text-align: center;
  margin-top: 10px;
}

// .category-name {
//   color: #333;
//   font-weight: bold;
//   font-size: 18px;
//   font-family: 'Open Sans', 'sans-serif';
// }

.category-pill {
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
  width: 150px
}

</style>
