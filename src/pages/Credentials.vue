<script>
import axios from 'axios';

export default {
  name: 'credentials',
  data() {
    return {
      order: {
        name: '',
        email: '',
        address: '',
        phoneNum: '',
      },
      instance: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      braintree.dropin.create(
        {
          authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b', //Questo dovrebbe essere reso dinamico dal server
          selector: '#dropin-container',
        },
        (err, instance) => {
          if (err) {
            console.error(err);
            return;
          }
          this.instance = instance;
        }
      );

      const button = document.getElementById('submit-button');
      if (button) {
        button.addEventListener('click', () => {
          if (this.instance) {
            this.instance.requestPaymentMethod((err, payload) => {
              if (err) {
                console.error(err);
                return;
              }
            });
          }
        });
      }
    });
  },
  methods: {
    async sendOrder() {
      // Verifica se tutti i campi sono stati compilati

      if (
        this.order.name &&
        this.order.email &&
        this.order.address &&
        this.order.phoneNum
      ) {
        if (this.instance) {
          // Controllo se l'istanza è stata inizializzata
          this.instance.requestPaymentMethod(async (err, payload) => {
            if (err) {
              console.error(err);
              return;
            }
            // Invia i dati dell'ordine al backend
            await this.sendOrderData(payload.nonce);
          });
        }
      } else {
        console.log("Compila tutti i campi prima di procedere all'ordine.");
      }
    },
    async sendOrderData(paymentNonce) {
      try {
        debugger;
        const cart = this.$store.getters.getCart;
        const response = await axios.post(`http://127.0.0.1:8000/api/orders`, {
          name: this.order.name,
          email: this.order.email,
          address: this.order.address,
          phone: this.order.phoneNum,
          paymentNonce: paymentNonce,
          restaurantId: cart[0].food.restaurant_id,
          cartItems: cart.reduce((items, item) => {
            items.push({
              id: item.food.id,
              price: item.food.price,
              quantity: item.count,
            });
            return items;
          }, []),
          total: cart.reduce((tot, item) => {
            return (tot += item.food.price * item.count);
          }, 0),
        });
        console.log("Dati dell'ordine inviati con successo:", response.data);
      } catch (error) {
        console.error("Errore durante l'invio dei dati dell'ordine:", error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="sendOrder" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="order.name"
          type="name"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email </label>
        <input
          v-model="order.email"
          type="email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input
          v-model="order.address"
          type="address"
          class="form-control"
          id="address"
        />
      </div>
      <div class="mb-3">
        <label for="number" class="form-label">number telefon</label>
        <input
          v-model="order.phoneNum"
          type="number"
          class="form-control"
          id="number"
        />
      </div>
      <div id="dropin-container"></div>
      <button id="submit-button" class="button button--small button--green">
        Purchase
      </button>
      <button type="submit" class="btn btn-primary">
        Procedi al pagamento
      </button>
    </form>
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
