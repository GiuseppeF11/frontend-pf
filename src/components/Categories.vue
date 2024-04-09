<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      searchTerm: '', 
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/categories').then(({ data }) => {
      this.categories = data.payload.data;
    });
  },
  computed: {
    filteredCategories() {
      if (!this.searchTerm.trim()) {
        return this.categories;
      }
      return this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
};
</script>
<template>
  <main>
    <div class="container py-5">
      <h1 class="title pb-4">Categorie</h1>
      
      <div class="input-group mb-4">
        <input type="text" class="form-control rounded-pill custom-input" v-model="searchTerm" placeholder="Cerca una categoria...">
      </div>
      
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center mt-5">
        <div v-for="category in filteredCategories" :key="category.id" class="category-card col-md-3">
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
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 30px;
}

.category-card {
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

.category-image {
  width: 150px;
  height: 150px;
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
  width: 150px;
}

.form-control.rounded-pill.custom-input {
  border-radius: 25px; 
  outline: none !important; 
  box-shadow: none !important; 
  padding-left: 20px; 
}

.input-group.mb-4 {
  max-width: 400px; 
  margin: 0 auto; 
}

</style>
