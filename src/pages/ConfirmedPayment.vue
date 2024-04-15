<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h1>Pagamento Confermato</h1>
            <p>
              Grazie per il tuo ordine! Il pagamento è stato confermato e
              l'ordine è stato preso in carico dal ristoratore.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background-color: rgba(255, 255, 255, 0.359);
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card-body {
  text-align: center;
}

.card-body h1 {
  font-size: 2rem;
  font-family: 'Paytone One', sans-serif;
  color: white;
  margin-bottom: 20px;
}

.card-body p {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', 'sans serif';
}
</style>
