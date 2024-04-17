<script>
export default {
  methods: {
    scrollToCategories(event) {
      event.preventDefault(); // Impedisce al link di eseguire la sua azione predefinita
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
        <div class="my-jumbotron d-flex justify-content-center align-items-center mb-2">
            <div class="text-center"> 
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
        height: 900px;
        background-image: url('/img/jumbotron.png');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;

        .title {
            font-family: 'Paytone One', sans-serif;
            color: white;
            font-size: 4rem;
            text-shadow: 10px 5px 5px black;
        }

        .subtitle {
            font-family: 'Open Sans', sans-serif;
            // text-shadow: 10px 5px 4px black;
            color: white;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1200px) {
        .my-jumbotron {
            background-image: url('/img/jumbotron-mobile.png'); 
            height: 900px; 
		}
    }

	.button-style-3 {
        // box-shadow: 0px 0px 5px black;
        display: inline-block;
        text-decoration: none;
        color: rgb(0, 0, 0);
        border: 1px solid transparent;
        padding: 8px 20px;
        margin: 4px 10px;
        cursor: pointer;
        border-radius: 24px;
        background-color: white;
        animation: bounce .3s infinite alternate;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
    }

    .button-style-3:hover {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }

    @keyframes bounce {
        to { transform: scale(1.1); }
    }

    .button-style-3 a {
        text-decoration: none;
    }
</style>
