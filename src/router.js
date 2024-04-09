import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './pages/Homepage.vue';
import CategoryDetail from './pages/CategoryDetail.vue';
import RestaurantDetail from './pages/RestaurantDetail.vue';
import Login  from './pages/Login.vue';
import Register  from './pages/Register.vue';

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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
export { router };
