<script>
import axios from 'axios';
export default {
  data() {
  return {
    food: {
      img: '' // Inizializza img come stringa vuota
    },
  };
},
  mounted() {
    if (this.$route.params.foodId) {
      axios
        .get(
          `http://127.0.0.1:8000/api/foods/${this.$route.params.foodId}`
        )
        .then(({ data }) => {
          this.food = data.payload;
        });
    }
  },
};
</script>

<template>
  <main class="py-5">
    <div class="container">
      <div class="mb-5 text-center">
        <h1 class="mb-4 title">
          {{ food.name }}
        </h1>
        <router-link :to="`/restaurant/${food.restaurant_id}`" class="button-style-3 text-button" >
          <i class="fa-solid fa-arrow-left"></i> Torna al ristorante
        </router-link>
      </div>
      <div class="row">
        <div class="col-auto m-2">
          <div class="img-container">
            <img :src="food.img.startsWith('http') ? food.img : 'http://127.0.0.1:8000/storage/' + food.img" :alt="food.name" />
          </div>
        </div>
        <div class="col m-2 frame ps-2">
            <div class="row text-start m-4">
              <h3 class="subtitle">Descrizione</h3>
              <div class="col subtitle-small">
                {{ food.description }}
              </div>
            </div>
            <div class="row text-start m-4">
              <div class="col">
                <h3 class="subtitle">Prezzo</h3>
                <div class="subtitle-small">
                  {{ food.price }} €
                </div>
              </div>
            </div>
            <div class="row text-start m-4">
              <div class="col">
                <h3 class="subtitle pb-2">Disponibilità</h3>
                <div :class="food.availability === 1 ? 'bg-success' : 'bg-danger'">
                  {{ food.availability === 1 ? 'Disponibile' : 'Non disponibile' }}
                </div>
              </div>
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
  margin-bottom: 20px;

}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
}

.subtitle-small {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
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

.img-container {
    width: 300px;
    height: 300px;
    margin:  0 auto;

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

.frame {
  box-shadow: 0px 0px 5px rgb(214, 214, 214);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
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

.bg-danger {
  font-size: 15px;
  cursor: pointer;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #BC3431;
  color: rgb(255, 255, 255);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 150px;
}

.bg-success {
  font-size: 15px;
  cursor: pointer;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #278113;
  color: rgb(255, 255, 255);
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 150px;
}
</style>
