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
      error: null,
      showEmptyCartMessage: false,
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
              this.confirmPayment(payload.nonce);
            });
          }
        });
      }
    });
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      let total = 0;
      for (let item of this.cartItems) {
        total += item.food.price * item.count;
      }
      return total.toFixed(2);
    },
  },
  methods: {
    async sendOrder() {
      if (
        this.order.name &&
        this.order.email &&
        this.order.address &&
        this.order.phoneNum
      ) {
        if (this.instance) {
          this.instance.requestPaymentMethod(async (err, payload) => {
            if (err) {
              console.error(err);
              return;
            }

            await this.sendOrderData(payload.nonce);
          });
        }
      } else {
        console.log("Compila tutti i campi prima di procedere all'ordine.");
      }
    },
    async sendOrderData(paymentNonce) {
      try {
        const cart = this.$store.getters.getCart;
        const response = await axios.post(
          `http://127.0.0.1:8000/api/endpoint`,
          {
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
          }
        );
        console.log("Dati dell'ordine inviati con successo:", response.data);
        this.$router.push({ name: 'ConfirmedPayment' });
      } catch (error) {
        console.error("Errore durante l'invio dei dati dell'ordine:", error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="sendOrder" method="POST">
          <div class="mb-3">
            <label for="name" class="form-label form-text text-white"
              >Nome <span>*</span></label
            >
            <input
              v-model="order.name"
              type="text"
              class="form-control"
              id="name"
              required
              placeholder="Es. Mario Rossi"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label form-text text-white"
              >Email <span>*</span></label
            >
            <input
              v-model="order.email"
              type="email"
              class="form-control"
              id="email"
              required
              placeholder="Es. email@email.com"
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label form-text text-white"
              >Indirizzo <span>*</span></label
            >
            <input
              v-model="order.address"
              type="text"
              class="form-control"
              id="address"
              placeholder="Es. Via Garibaldi 22 - Roma"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label form-text text-white">
              Numero di telefono <span>*</span>
            </label>
            <div class="d-flex">
              <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">+39</span>
            </div>
            <input
              v-model="order.phoneNum"
              type="tel"
              class="form-control rounded-0 rounded-end-2  "
              id="phone"
              placeholder="Es. 3221334411"
              pattern="[0-9]{10}"
              minlength="10"
              maxlength="10"
              title="Il numero di telefono deve contenere solo cifre e deve essere lungo 10 caratteri."
              required
            />
            </div>
          </div>


          <div id="dropin-container"></div>
          <div id="dropin-container"></div>
          <button
            id="submit-button"
            class="button form-text"
            :disabled="totalPrice <= 0"
            @click="handlePayment"
          >
            Procedi al pagamento
          </button>
        </form>
      </div>

      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header title-text">Carrello</div>
          <div class="card-body">
            <div v-for="item in cartItems" :key="item.food.id">
              <p class="form-text">
                {{ item.food.name }} = {{ item.food.price }} € x
                {{ item.count }}
              </p>
            </div>
            <hr />
            <p class="total">
              Totale: <span class="price">{{ totalPrice }} €</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-text {
  font-family: 'Open Sans', 'sans-serif';
  font-size: 1rem;
  color: black;
}
.card {
  width: 100%;
  margin-left: 30px;
  margin-top: 30px;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.title-text {
  font-family: 'Paytone One', sans-serif;
  color: #bc3431;
  font-size: 2rem;
}

.card-body {
  padding: 1rem;
}
.total {
  font-family: 'Paytone One', sans-serif;
  color: #bc3431;
  font-size: 1rem;
  .price {
    font-family: 'Open Sans', 'sans-serif';
    color: black;
  }
}

.button {
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 1px solid transparent;
  padding: 8px 20px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  background-color: rgba(246, 144, 30, 1);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  margin-bottom: 50px;
}
.button:hover {
  color: rgb(255, 255, 255);
  background-color: transparent;
  border: 1px solid rgb(255, 255, 255);
}

.empty-cart-message {
  color: #bc3431;
  font-size: 2rem;
}

.input-group-text {
  border-radius: 5px 0 0 5px;
}

</style>
