<script>
export default {
  data() {
    return {
      images: ['pizza.avif', 'sushi.avif', 'cannolo-siciliano.avif'],
      currentSlide: 0,
      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.images.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.images.length - 1;
      } else {
        this.currentSlide--;
      }
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<template>
  <div class="my_jumbotron">
    <div class="carousel">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentSlide }"
        >
          <img v-bind:src="`/img/${image}`" alt="Slide" />
        </div>
      </div>
    </div>
    <div class="my_slogan">
      <h1 class="title">DeliveBoo</h1>
      <p class="subtitle fs-5">
        Hai fame? Festeggia ogni boccone di felicità consegnato direttamente a
        casa tua
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../../src/assets/scss/font.scss' as *;

.my_jumbotron {
  position: relative;

  .carousel {
    .carousel-inner {
      position: relative;
      width: 100%;
      height: 600px;
    }

    .carousel-item {
      position: absolute;
      z-index: auto;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-out;

      &.active {
        opacity: 1;
      }
    }
    .carousel-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel-control-prev {
    left: 10px;
  }

  .carousel-control-next {
    right: 10px;
  }

  .my_slogan {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 55%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    color: white;
    .title {
      font-size: 4rem;
      font-family: 'Lora', sans-serif;
    }
    .subtitle {
      font-size: 1.5rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 100;
    }
  }
  .search-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    .search .bar {
      width: 300px;
      margin-right: 20px;
    }
  }
}
</style>
