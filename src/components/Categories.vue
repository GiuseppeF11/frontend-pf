<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      restaurants: [],
      activeCategories: [],
      searchTerm: '',
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(({ data }) => {
        console.log('Dati delle categorie:', data.restaurants);
        this.categories = data.payload.data;
      })
      .catch(error => {
        console.error('Errore nel recuperare l\'elenco delle categorie:', error);
      });

    axios.get('http://127.0.0.1:8000/api/restaurants')
      .then(({ data }) => {
        console.log('Dati dei ristoranti:', data);
        this.restaurants = data.payload;
      })
      .catch(error => {
        console.error('Errore nel recuperare l\'elenco dei ristoranti:', error);
      });
  },
  methods: {
    toggleCategory(categoryId) {
      const index = this.activeCategories.indexOf(categoryId);
      if (index === -1) {
        this.activeCategories.push(categoryId);
      } else {
        this.activeCategories.splice(index, 1);
      }
    },
    isCategoryActive(categoryId) {
      return this.activeCategories.includes(categoryId);
    },
  },
  computed: {
    filteredRestaurants() {
      let filteredByCategory = this.restaurants;

      // Filtra solo i ristoranti che contengono TUTTE le categorie selezionate
      if (this.activeCategories.length > 0) {
        filteredByCategory = this.restaurants.filter(restaurant =>
          this.activeCategories.every(categoryId =>
            restaurant.categories.some(category => category.id === categoryId)
          )
        );
      }

      // Filtraggio per nome digitato
      let filteredByName = filteredByCategory;
      if (this.searchTerm.trim()) {
        filteredByName = filteredByCategory.filter(restaurant =>
          restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      return filteredByName;
    },
  },
};
</script>


<template>
  <main>
    <div class="container py-5">
      <h1 class="title pb-4">Categorie</h1>
            
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center mt-5">
        <div v-for="category in categories" :key="category.id" class="category-card col-md-3">
          <div @click="toggleCategory(category.id)">
            <div class="card-content">
                <h5 class="card-title category-name" :class="[ isCategoryActive(category.id) ? 'category-pill-active' : 'category-pill' ]">{{ category.name }}</h5>
            </div>
          </div>
        </div>
      </div>
      
      <h1 class="title pb-4">Ristoranti</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
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
      
      <!-- Controlla se l'array dei ristoranti filtrati è vuoto -->
      <div v-if="filteredRestaurants.length === 0" class="text-center mt-5">
        <h4>Nessun ristorante presente.</h4>
      </div>

      <!-- Mostra i ristoranti solo se ce ne sono -->
      <div v-else class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center mt-5">
        <div v-for="restaurant in filteredRestaurants" :key="restaurant.id" class="category-card col-md-3">
          <a :href="`/restaurant/${restaurant.id}`" class="card-link">
            <div class="card-content">
              <img :src="restaurant.img" class="category-image" alt="Immagine ristorante" />
              <div class="card-body">
                <h5 class="card-title category-name category-pill">{{ restaurant.name }}</h5>
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
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.09);
  }
}

.category-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 10px;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.category-pill {
  position: absolute;
  cursor: pointer;
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

.category-pill-active {
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
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
