<template>
  <main class="my-4">
    <div class="row text-center">
      <div class="col-12 col-md m-4">
        <font-awesome-icon
          :icon="['fas', 'burger']"
          size="2xl"
          style="color: #ffffff"
          class="font"
        />
        <h5 class="title">Facile da ordinare</h5>
        <p class="subtitle m-3">Pochi passaggi per ordinare il cibo da casa.</p>
      </div>

      <div class="col-12 col-md m-3">
        <font-awesome-icon
          :icon="['fas', 'truck-fast']"
          size="2xl"
          style="color: #ffffff"
          class="font"
        />
        <h5 class="title">Consegna veloce</h5>
        <p class="subtitle m-4">Consegna sempre puntuale ancora più veloce.</p>
      </div>

      <div class="col-12 col-md m-3">
        <font-awesome-icon
          :icon="['fas', 'seedling']"
          size="2xl"
          style="color: #ffffff"
          class="font"
        />
        <h5 class="title">Ottima qualità</h5>
        <p class="subtitle m-4">
          Oltre che alla velocità la nostra priorità è la qualità!
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../../src/assets/scss/font.scss' as *;

.title {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-size: 1rem;
}
.font {
  height: 60px;
  margin-bottom: 15px;
}

i {
  color: white;
}
</style>
