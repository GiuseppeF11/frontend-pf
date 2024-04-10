<script>
import HeroBanner from '../components/HeroBanner.vue';
import Categories from '../components/Categories.vue';
import RegistrationBunner from '../components/RegistrationBunner.vue';
import BestRestaurant from '../components/BestRestaurant.vue';
import Servizi from '../components/Servizi.vue';



export default {
  components: {
    HeroBanner,
    Servizi,
    Categories,
    RegistrationBunner,
    BestRestaurant,
  
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <HeroBanner />
  <Servizi />
  <Categories />
  <RegistrationBunner/>
  <BestRestaurant/>
</template>

<style lang="scss" scoped></style>
