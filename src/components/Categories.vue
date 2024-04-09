<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      restaurants: [],
      activeCategories: [] // Array per memorizzare le categorie attive
    };
  },
  mounted() {
    // Richiesta per ottenere l'elenco delle categorie all'avvio del componente
    axios.get('http://127.0.0.1:8000/api/categories')
    .then(({ data }) => {
      console.log('Dati delle categorie:', data.restaurants);
      this.categories = data.payload.data;
    })
    .catch(error => {
      console.error('Errore nel recuperare l\'elenco delle categorie:', error);
    });

    // Richiesta per ottenere l'elenco dei ristoranti all'avvio del componente
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
    // Metodo per aggiungere o rimuovere una categoria dall'array delle categorie attive
    toggleCategory(categoryId) {
      const index = this.activeCategories.indexOf(categoryId);
      if (index === -1) {
        // Se la categoria non è già presente, la aggiungiamo
        this.activeCategories.push(categoryId);
      } else {
        // Se la categoria è già presente, la rimuoviamo
        this.activeCategories.splice(index, 1);
      }
    },
    // Metodo per verificare se una categoria è attiva
    isCategoryActive(categoryId) {
      return this.activeCategories.includes(categoryId);
    }
  },
  computed: {
    // Calcolatore per ottenere i ristoranti filtrati in base alle categorie attive
    filteredRestaurants() {
      if (this.activeCategories.length === 0) {
        return this.restaurants; // Se nessuna categoria è attiva, restituisci tutti i ristoranti
      }
      // Filtra i ristoranti in base alle categorie attive
      return this.restaurants.filter(restaurant => {
        return this.activeCategories.every(categoryId =>
          restaurant.categories.some(category => category.id === categoryId)
        );
      });
    }
  }
};
</script>

<template>
  <main>
    <div class="container py-5">
      <h1 class="title pb-4">Categorie</h1>
            
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center mt-5">
        <div v-for="category in categories" :key="category.id" class="category-card col-md-3">
          <!-- Utilizziamo il metodo toggleCategory per aggiungere o rimuovere una categoria -->
          <div @click="toggleCategory(category.id)">
            <div class="card-content">
              <div class="card-body">
                <h5 class="card-title category-name" :class="[ isCategoryActive(category.id) ? 'category-pill-active' : 'category-pill' ]">{{ category.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h1 class="title pb-4">Ristoranti</h1>
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center mt-5">
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

.category-pill-active{
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
