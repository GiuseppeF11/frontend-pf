<template>
  <div class="container">
    <main class="my-2">
    <div class="row text-center">
      <div class="col-12 col-md">
        <i class="fa-solid fa-burger font"> </i>
        <h5 class="title">Facile da ordinare</h5>
        <p class="subtitle">Pochi passaggi per ordinare il cibo da casa.</p>
      </div>

      <div class="col-12 col-md">
        <i class="fa-solid fa-truck-fast font"> </i>
        <h5 class="title">Consegna veloce</h5>
        <p class="subtitle">Consegna sempre puntuale ancora più veloce.</p>
      </div>

      <div class="col-12 col-md">
        <i class="fa-solid fa-seedling font"> </i> 
        <h5 class="title">Ottima qualità</h5>
        <p class="subtitle">
          Oltre che alla velocità la nostra priorità è la qualità!
        </p>
      </div>
    </div>
  </main>
  </div>
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
  font-size: 60px;
}

i {
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.09);
  }
}
</style>
