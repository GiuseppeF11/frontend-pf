<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      restaurants: [],
      activeCategories: [],
      searchTerm: '',
	  visibleRestaurants: [],
      visibleRestaurantCount: 12, 
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
    loadMoreRestaurants() {
      this.visibleRestaurantCount += 12; // Load next 12 restaurants
    },
    seeLessRestaurants() {
      this.visibleRestaurantCount = 12; // Reset to show only 12 restaurants
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

    ShowLoadMoreLink() {
      return this.filteredRestaurants.length > this.visibleRestaurantCount;
    },
    ShowSeeLessLink() {
      return this.visibleRestaurantCount > 12; // Show only if more than 12 restaurants are displayed
    },
  },
};
</script>


<template>
	<main>
	  <div class="container">
		<!-- Categories Section -->
		<!-- Your existing code for categories -->
  
		<div class="container mb-5 pb-5">
		  <h2 class="secondary-title">Lista dei ristoranti</h2>
		  <div class="row justify-content-center">
			<div class="col-md-6">
			  <div class="input-group my-2">
				<input
				  type="text"
				  class="form-control rounded-pill custom-input text-input"
				  v-model="searchTerm"
				  placeholder="Inserisci il nome del ristorante..."
				/>
			  </div>
			</div>
		  </div>
  
		  <!-- Controlla se l'array dei ristoranti filtrati è vuoto -->
		  <!-- Your existing code for displaying "Nessun ristorante presente" -->
  
		  <!-- Mostra i ristoranti solo se ce ne sono -->
		  <div class="row justify-content-center mt-5">
			<div
			  v-for="(restaurant, index) in filteredRestaurants"
			  :key="restaurant.id"
			  v-show="index < visibleRestaurantCount"
			  class="category-card col-lg-3 col-md-4 col-sm-3 col-sm-6 col-6 text-center p-4"
			>
			  <a :href="`/restaurant/${restaurant.id}`" class="text-decoration-none">
				<div class="card-content d-flex align-items-center flex-column">
				  <img
					:src="restaurant.img"
					class="category-image"
					alt="Immagine ristorante"
				  />
				  <div class="mt-n3">
					<h5 class="text-center card-title category-name category-pill-2">
					  {{ restaurant.name }}
					</h5>
				  </div>
				</div>
			  </a>
			</div>
		  </div>
  
		  <div v-if="ShowLoadMoreLink" class="mt-5 text-center">
			<a @click.prevent="loadMoreRestaurants" href="#" class="button-style-3">
			  Carica Altri Ristoranti
			</a>
		  </div>
  
		  <div v-if="ShowSeeLessLink" class="mt-5 text-center">
			<a @click.prevent="seeLessRestaurants" href="#" class="button-style-3">
			  Vedi Meno
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

.secondary-title {
  font-family: 'Open Sans', 'sans-serif';
  font-size: 1.8rem;
  color: white;
  text-align: center;
  margin: 30px;
}

.allert-subtitle {
  font-family: 'Open Sans', 'sans-serif';
  font-size: 1.2rem;
  color: white;
  text-align: center;
  font-style: italic;


}

.text-input {
  font-family: 'Open Sans', 'sans-serif';
}


.category-image {
  width: 170px;
  height: 170px;
  border-radius: 25%;
  margin: 0 auto 10px;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.category-pill {
  cursor: pointer;
  border: 1px solid transparent;
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgba(246, 144, 30, 1);
  color: rgb(255, 255, 255);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 180px;
  transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
}

.category-pill:hover {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }

.category-pill-active {
  cursor: pointer;
  bottom: 20px;
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 180px;

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

.subtitle {
	  font-size: 18px;
	  line-height: 1.5;
	  color: white;
	  font-family: 'Open Sans', sans-serif;
}

.card-link {
	a {
		text-decoration: none;
	}
}

.category-pill-2 {
  cursor: pointer;
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 200px;
  transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
}

.category-pill-2:hover {
        color: white;
        background-color: rgba(246, 144, 30, 1);
    }

.category-pill-2-active {
  cursor: pointer;
  bottom: 20px;
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgb(243, 243, 243);
  color: rgba(246, 144, 30, 1);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
}

.button-style-3 {
        display: inline-block;
        text-decoration: none;
        color: rgb(0, 0, 0);
        border: 1px solid transparent;
        padding: 8px 20px;
        margin: 4px 10px;
        cursor: pointer;
        border-radius: 24px;
        background-color: white;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
    }

    .button-style-3:hover {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }

    .button-style-3 a {
        text-decoration: none;
    }
</style>
