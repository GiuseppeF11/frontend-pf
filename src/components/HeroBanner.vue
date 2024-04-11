<script>
export default {
  methods: {
    scrollToCategories() {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<template>
    <main>
        <div class="my-jumbotron d-flex align-items-center mb-2">
            <div class="col mx-sm-5 text-center"> <!-- Added text-center class -->
                <h1 class="title">Benvenuto in fastbites!</h1>
                <p class="subtitle fs-5">
                    Hai fame? Festeggia ogni boccone di felicità consegnato direttamente a casa tua
                </p>
                <a class="button-style-3" href="#" @click="scrollToCategories">Ordina ora</a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables.scss' as *;
    @use '../../src/assets/scss/font.scss' as *;

    .my-jumbotron {
        height: 600px;
        background-image: url('/img/jumbotron.png');
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;

        .title {
            font-family: 'Paytone One', sans-serif;
            color: white;
            font-size: 4rem;
        }

        .subtitle {
            font-family: 'Open Sans', sans-serif;
            color: white;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 767px) {
        .my-jumbotron {
            background-image: url('/img/jumbotron-mobile.png'); 
            height: 700px; 
		}
    }

	.button-style-3 {
        display: inline-block;
        text-decoration: none;
        color: rgb(0, 0, 0);
        border: 1px solid transparent;
        padding: 8px 20px;
        margin: 4px 10px;
        cursor: pointer;
        border-radius: 24px;
        background-color: white;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
    }

    .button-style-3:hover {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }

    .button-style-3 a {
        text-decoration: none;
    }
</style>
