import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './pages/Homepage.vue';
import CategoryDetail from './pages/CategoryDetail.vue';
import RestaurantDetail from './pages/RestaurantDetail.vue';
import FoodDetail from './pages/FoodDetail.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Credentials from './pages/Credentials.vue';
import PaymentPage from './pages/payment.vue';
import ConfirmedPayment from './pages/ConfirmedPayment.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/category/:categoryId',
      name: 'Category',
      component: CategoryDetail,
    },
    {
      path: '/restaurant/:restaurantId',
      name: 'Restaurant',
      component: RestaurantDetail,
    },
    {
      path: '/food/:foodId',
      name: 'Food',
      component: FoodDetail,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: Credentials,
      meta: {
        requiresCart: true,
      },
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage,
    },

    {
      path: '/confirmedpayment',
      name: 'ConfirmedPayment',
      component: ConfirmedPayment,
    },
    /*
        {
            path: '/rejected',
            name: 'rejected',
            component: RejectedPayment,
        } */
  ],
});
export { router };
