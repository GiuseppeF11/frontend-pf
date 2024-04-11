<template>
	<div class="container">
		<div class="mb-4 row align-items-center justify-content-center">
			<div class="col-lg-6 col-md-10 text-center text-lg-start">
				<h2 class="title pb-2">
				Diventa un ristoratore su Fastbites
				</h2>
				<p class="subtitle">
				Con Fastbites, puoi ampliare la tua clientela inserendo il tuo menu
				online. Registrati facilmente e raggiungi una vasta audience di amanti
				del buon cibo. Gestisci il tuo menu, aggiorna le proposte e ricevi
				ordini direttamente sul nostro sito. Semplice e veloce, inizia a far
				assaporare i tuoi piatti unici ai clienti comodamente a casa loro.
				Unisciti a Fastbites oggi stesso e fatti conoscere dalla nostra
				community appassionata di buon cibo!
				</p>
				<a class="button-style-4 text-button mb-4" :href="`http://127.0.0.1:8000/`">
				Registrati
				</a>
			</div>

			<div class="col-lg-6 col-md-10 mt-4">
				<img src="/img/deliveryman.png" alt="" class="img-fluid" />
			</div>
		</div>
	</div>
</template>
  
  <style lang="scss" scoped>
	@use '../assets/scss/partials/variables.scss' as *;
	@use '../../src/assets/scss/font.scss' as *;

  
	.title {
	  font-family: 'Paytone One', sans-serif;
	  font-size: 2rem;
	  color: white;
	  margin-bottom: 20px;
	}
  
	.subtitle {
	  font-size: 18px;
	  line-height: 2;
	  color: white;
	  font-family: 'Open Sans', sans-serif;
	}
  
	.button-style-4 {
	  font-size: 16px;
	  display: inline-block;
	  text-decoration: none;
	  color: white;
	  padding: 10px 20px;
	  margin-top: 20px;
	  cursor: pointer;
	  border-radius: 24px;
	  transition: background-color 0.3s ease;
	  border: none;
	  background-color: rgba(246, 144, 30, 1);
  
	  &:hover {
		background-color: #ffffff;
		color: black;
	  }
	}
  
	.image img {
	  max-width: 100%;
	  height: auto;
	}
  
  </style>
  