<script>
export default {
  data() {},
  props: {
    cartItem: Object,
  },
  methods: {
    increment() {
      this.$store.commit('setQuantityCart', {
        count: this.currentQuantity + 1,
        food: this.cartItem.food,
      });
      this.$store.commit('toggleCart', true);
    },
    decrement() {
      if (this.currentQuantity > 1) {
        this.$store.commit('setQuantityCart', {
          count: this.currentQuantity - 1,
          food: this.cartItem.food,
        });
      } else {
        this.$store.commit('removeFromCart', this.cartItem.food.id);
      }
      this.$store.commit('toggleCart', true);
    },
    removeFromCart(foodId) {
      this.$store.commit('removeFromCart', foodId);
    },
  },
  computed: {
    currentQuantity() {
      return (
        this.$store.getters.getCart.find(
          (item) => item.food.id === this.cartItem.food.id
        )?.count ?? 0
      );
    },
  },
};
</script>

<template>
  <div class="container-orders">
    <div class="container-single-order">
      <div class="quantity">
        <h4 class="food-name">{{ cartItem.count }} x</h4>
      </div>
      <div class="name">
        <h4 class="food-name">{{ cartItem.food.name }}</h4>
      </div>
      <div class="total-price">
        <span class="price">{{ cartItem.food.price }} €</span>
        <button class="trash" @click="removeFromCart(cartItem.food.id)">
          <font-awesome-icon :icon="['fas', 'trash-can']" size="xs" />
        </button>
      </div>
    </div>
    <div class="input-wrapper" v-if="currentQuantity">
      <button @click="decrement()">-</button>
      <input
        type="number"
        min="1"
        :value="currentQuantity"
        class="pill-input"
      />
      <button @click="increment()">+</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-orders {
  margin-bottom: 20px;
}
.container-single-order {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}
.quantity {
  max-width: 40px;
}
.name {
  width: 220px;
}
.food-name {
  color: #333;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Open Sans', 'sans-serif';
  margin-right: 10px;
}
.total-price {
  min-width: 85px;
  display: flex;
  justify-content: space-between;
}
.price {
  font-size: 15px;
  font-family: 'Open Sans', 'sans-serif';
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}

.input-wrapper {
  display: flex;
  align-items: center;
}

.pill-input {
  border: none;
  width: 50px;
  text-align: center;
}

button {
  border-radius: 50%;
  background-color: rgba(246, 144, 30, 1);
  color: white;
  border: none;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background-color 0.3s;
}

.text-button {
  font-family: 'Open Sans', 'sans-serif';
  height: 24px;
  width: 24px;
}
</style>
