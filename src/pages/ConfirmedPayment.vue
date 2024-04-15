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
        <div class="confirmation-message">
          <h1>Pagamento confermato</h1>
          <p>
            Grazie per il tuo ordine! Il tuo pagamento è stato confermato e
            l'ordine è stato preso in carico dal ristoratore.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
.confirmation-message {
  text-align: center;
}
.confirmation-message h1 {
  font-size: 2rem;
  color: #bc3431;
}
.confirmation-message p {
  font-size: 1.2rem;
}
</style>
