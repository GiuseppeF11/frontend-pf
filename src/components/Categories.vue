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
    axios
      .get('http://127.0.0.1:8000/api/categories')
      .then(({ data }) => {
        console.log('Dati delle categorie:', data.restaurants);
        this.categories = data.payload.data;
      })
      .catch((error) => {
        console.error("Errore nel recuperare l'elenco delle categorie:", error);
      });

    axios
      .get('http://127.0.0.1:8000/api/restaurants')
      .then(({ data }) => {
        console.log('Dati dei ristoranti:', data);
        this.restaurants = data.payload;
        this.updateVisibleRestaurants();
      })
      .catch((error) => {
        console.error("Errore nel recuperare l'elenco dei ristoranti:", error);
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
      this.updateVisibleRestaurants();
    },
    isCategoryActive(categoryId) {
      return this.activeCategories.includes(categoryId);
    },
    loadMoreRestaurants() {
      this.visibleRestaurantCount += 12;
      this.updateVisibleRestaurants();
    },
    seeLessRestaurants() {
      this.visibleRestaurantCount = 12;
      this.updateVisibleRestaurants();
    },
    updateVisibleRestaurants() {
      let filteredByCategory = this.filteredRestaurants;
      this.visibleRestaurants = filteredByCategory.slice(
        0,
        this.visibleRestaurantCount
      );
    },
  },
  computed: {
    filteredRestaurants() {
      let filteredByCategory = this.restaurants;

      // Filtra solo i ristoranti che contengono TUTTE le categorie selezionate
      if (this.activeCategories.length > 0) {
        filteredByCategory = this.restaurants.filter((restaurant) =>
          this.activeCategories.every((categoryId) =>
            restaurant.categories.some((category) => category.id === categoryId)
          )
        );
      }

      // Filtraggio per nome digitato
      let filteredByName = filteredByCategory;
      if (this.searchTerm.trim()) {
        filteredByName = filteredByCategory.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      return filteredByName;
    },

    ShowLoadMoreLink() {
      return (
        this.filteredRestaurants.length > this.visibleRestaurantCount &&
        this.visibleRestaurants.length >= 12
      );
    },
    ShowSeeLessLink() {
      return (
        this.visibleRestaurantCount > 12 && this.visibleRestaurants.length >= 12
      );
    },
  },
  watch: {
    searchTerm() {
      this.updateVisibleRestaurants();
    },
    visibleRestaurantCount() {
      this.updateVisibleRestaurants();
    },
  },
};
</script>

<template>
  <main id="categories-section">
    <div class="container">
      <div class="row text-center mx-5 pb-4">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <!-- <h1 class="title pb-3">Categorie</h1> -->
          <h2 class="secondary-title ">Trova i tuoi ristoranti preferiti!</h2>
          <div class="row g-0 justify-content-center mb-4">
            <div class="col-md-6">
              <div class="input-group my-1">
                <input
                  type="text"
                  class="form-control rounded-pill custom-input text-input"
                  v-model="searchTerm"
                  placeholder="Inserisci il nome del ristorante..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row g-0 mx-5 mx-xl-0 mx-lg-0 pb-2"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          class="col-lg-3 col-md-6 col-sm-12 col-12 my-2 d-flex justify-content-center"
        >
          <div @click="toggleCategory(category.id)">
            <h5
              class="card-title category-name text-center"
              :class="[
                isCategoryActive(category.id)
                  ? 'category-pill-active'
                  : 'category-pill',
              ]"
            >
              {{ category.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5 pb-5">

      <!-- Mostra i ristoranti solo se ce ne sono -->
      <div
        v-if="filteredRestaurants.length === 0"
        class="allert-subtitle text-center mt-3 mb-5"
      >
        <p>Nessun ristorante presente.</p>
      </div>

      <!-- Mostra i ristoranti filtrati e visibili -->
      <div v-else class="row justify-content-center mt-5">
        <div
          v-for="restaurant in visibleRestaurants"
          :key="restaurant.id"
          class="category-card col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 text-center p-4"
        >
        <a :href="`/restaurant/${restaurant.id}`" class="buy-button category-pill-2 px-4 w-auto fw-bold" action="">Acquista</a>
                  
          <a
            :href="`/restaurant/${restaurant.id}`"
            class="text-decoration-none"
          >
            <div class="card-content d-flex align-items-center flex-column">

                <div class="card-image d-flex flex-column justify-content-between" :style="{ backgroundImage: 'url(' + (restaurant.img.startsWith('http') ? restaurant.img : 'http://127.0.0.1:8000/storage/' + restaurant.img) + ')' }">
                  <div class="overlay">
                  </div>
                  <div class="row px-3 py-3 ">
                  <div class="row d-flex">
                    <div
                        v-for="category in restaurant.categories"
                        :key="category.id"
                        class="badge-category col-auto mr-2"
                      >
                        {{ category.name }}
                    </div>
                  </div>
                </div>
                </div>
                <!-- Aggiunta dei badge per le categorie -->
                
                <div class="restaurant-details text-start fw-bold">
                  <h4 class="restaurant-name">{{ restaurant.name }}</h4>
                  <div class="restaurant-address">
                    <i class="fa-solid fa-location-dot"></i> {{ restaurant.address }}
                  </div>
                </div>
            </div>
          </a>
        </div>

        <div class="d-flex justify-content-center align-items center pt-5">
          <div v-if="ShowLoadMoreLink" class="text-center">
          <a
            @click.prevent="loadMoreRestaurants"
            href="#"
            class="button-style-3"
          >
            Mostra di più
          </a>
        </div>

        <div v-if="ShowSeeLessLink" class="text-center">
          <a
            @click.prevent="seeLessRestaurants"
            href="#"
            class="button-style-3"
          >
            Mostra meno
          </a>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

.title {
  font-family: 'Paytone One', sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 30px;
  /* text-shadow: 10px 5px 5px black; */
}

.secondary-title {
  font-family: 'Paytone One', sans-serif;
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

.card-image {
  width: 100%;
  height: 230px;
  border-radius: 20px 20px 0% 0%;
  /* margin: 0 auto 20px; */
  object-fit: cover;
  /* box-shadow: 0px 0px 20px black; */
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.card-body {
  margin-top: 10px;
}

.category-pill {
  box-shadow: 0px 0px 5px white;
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
  border: none !important;
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

.category-card {
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease; /* Applica la transizione solo alla trasformazione della carta */
}

.category-card:hover {
  transform: scale(1.03);
  /* filter: blur(2px); */
  .buy-button {
    display: block;
    transition: 0.3s ease-in;
    filter: none;
  }
}

.buy-button {
  position: absolute;
  border: none;
  display: none;
  border-radius: 10px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
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
  // box-shadow: 0px 0px 5px white;
  display: inline-block;
  text-decoration: none;
  color: rgb(255, 255, 255);
  border: 1px solid transparent;
  padding: 8px 20px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  background-color: rgba(246, 144, 30, 1);
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

.badge-category {
  background-color: #CC3333;
  font-size: 13px;
  border-radius: 10px;
  color: white;
  padding: 3px 10px;
  margin: 3px 0px;
  font-weight: bold;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.832) 0%, rgba(0, 0, 0, 0.253) 50%, rgba(0, 0, 0, 0) 100%);
}

.restaurant-details {
  color: black;
  z-index: 1;
  position: relative;
  width: 100%;
  background-color: white;
  height: 150px;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 0% 0% 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.restaurant-name {
  font-family: 'Paytone One', sans-serif;
}
</style>
