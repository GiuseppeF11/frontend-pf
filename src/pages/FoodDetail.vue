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
  <main>
    <div class="container">
      <div class="d-flex justify-content-center mb-5 ">
        <router-link :to="`/restaurant/${food.restaurant_id}`" class="button-style-4-cart text-button" >
          <i class="fa-solid fa-arrow-left"></i> Torna al ristorante
        </router-link>
      </div>
      <div class="row">
        <h1 class="text-center mb-4">
          {{ food.name }}
        </h1>
        <div class="col-auto p-0 m-2 frame">
          <div class="img-container">
            <img :src="food.img.startsWith('http') ? food.img : 'http://127.0.0.1:8000/storage/' + food.img" :alt="food.name" />
          </div>
        </div>
        <div class="col m-2 frame">
            <div class="row text-center m-2 pb-2  border-bottom ">
              <h3>Descrizione</h3>
              <div class="col fs-5 ">
                {{ food.description }}
              </div>
            </div>
            <div class="row text-center m-2 pb-2  border-bottom">
              <div class="col">
                <h3>Prezzo</h3>
                <div class="fs-5">
                  {{ food.price }} €
                </div>
              </div>
            </div>
            <div class="row text-center m-2 pb-2  border-bottom">
              <div class="col">
                <h3>Disponibilità</h3>
                <div class="badge py-1 px-3 fs-6 " :class="food.availability === 1 ? 'bg-success' : 'bg-danger'">
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
  font-size: 2rem;
  color: white;
  text-align: center;
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
  background-color: #eca588bd;
  box-shadow: 0px 0px 15px;
  border-radius: 10px;
}

.button-style-4-cart {
  width: auto;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 5px 15px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease;
  border: none;
  background-color: white;
  &:hover {
    background-color: rgba(246, 144, 30, 1);
    color: white;
  }
}
</style>
