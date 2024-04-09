<template>
  <main>
    <div class="container pt-5 pb-5 d-flex">
      <div class="text-with-image">
        <h2 class="title pb-2 text-start">
          Diventa un ristoratore su Fastbites
        </h2>
        <p>
          Con Fastbites, puoi ampliare la tua clientela inserendo il tuo menu
          online. Registrati facilmente e raggiungi una vasta audience di amanti
          del buon cibo. Gestisci il tuo menu, aggiorna le proposte e ricevi
          ordini direttamente sul nostro sito. Semplice e veloce, inizia a far
          assaporare i tuoi piatti unici ai clienti comodamente a casa loro.
          Unisciti a Fastbites oggi stesso e fatti conoscere dalla nostra
          community appassionata di buon cibo!
        </p>

        <a class="button-style-4" :href="`http://127.0.0.1:8000/register`">
          Registrati
        </a>
      </div>

      <div class="image">
        <img src="/img/deliveryman.png?url." alt="" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.text-with-image {
  width: 40%;
  padding-right: 30px;

  h2 {
    font-size: 2.5rem;
  }

  p {
    color: white;
    line-height: 2.5;
    font-size: 18px;
  }
}

.image {
  width: 50%;
  padding-left: 30px;
}

.image img {
  width: 100%;
  height: auto;
}

.title {
  font-family: 'Paytone One', sans-serif;
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
}

.button-style-4 {
  font-size: 18px;
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  margin: 4px 10px;
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
</style>
