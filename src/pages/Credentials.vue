<script>
import { store } from '../store/store.js';
import axios from 'axios';

export default {
  name: 'credentials',
  data() {
    return {
      store,
      instance: null, // Aggiungo una proprietà per l'istanza di Braintree
    };
  },
  mounted() {
    this.$nextTick(() => {
      braintree.dropin.create(
        {
          authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
          selector: '#dropin-container',
        },
        (err, instance) => {
          if (err) {
            console.error(err);
            return;
          }
          this.instance = instance; // Assegno l'istanza a this.instance
        }
      );

      const button = document.getElementById('submit-button');
      if (button) {
        button.addEventListener('click', () => {
          console.log('ciao');
          if (this.instance) {
            // Controllo se l'istanza è stata inizializzata
            this.instance.requestPaymentMethod((err, payload) => {
              if (err) {
                console.error(err);
                return;
              }
              // Submit payload.nonce to your server
            });
          }
        });
      }
    });
  },
  methods: {
    async order() {
      // Verifica se tutti i campi sono stati compilati
      if (
        this.store.order.name &&
        this.store.order.email &&
        this.store.order.address &&
        this.store.order.phon_num
      ) {
        // Effettua una copia dei dati dell'ordine
        const orderData = { ...this.store.order };
        console.log("Dati dell'ordine:", orderData);
      } else {
        console.log("Compila tutti i campi prima di procedere all'ordine.");
      }
    },
  },
};
console.log(store.cart);
console.log(store.order);
</script>

<template>
  <div class="container">
    <form @submit.prevent="order" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="store.order.name"
          type="name"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email </label>
        <input
          v-model="store.order.email"
          type="email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input
          v-model="store.order.address"
          type="address"
          class="form-control"
          id="address"
        />
      </div>
      <div class="mb-3">
        <label for="number" class="form-label">number telefon</label>
        <input
          v-model="store.order.phon_num"
          type="number"
          class="form-control"
          id="number"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Procedi al pagamento
      </button>
    </form>
    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green">
      Purchase
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>
