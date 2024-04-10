<script>
import axios from 'axios';
export default {
  data() {
    return {
      food: {},
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
      <div class="row">
        <h1 class="text-center">
          {{ food.name }}
        </h1>
        <div class="col-auto p-0 m-2 frame">
          <div class="img-container">
            <img :src="food.img" :alt="food.name">
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
</style>
