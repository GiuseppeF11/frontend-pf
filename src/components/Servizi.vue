

<template>
    <main class="my-4">
        <div class="row text-center">
            <div class="col-12 col-md m-4">
                <font-awesome-icon :icon="['fas', 'burger']" />
                <h5 class="title">
                    Facile da ordinare
                </h5>
                <p class="subtitle m-4">
                    Pochi passaggi
                    per ordinare cibo direttamente da casa
                </p>
            </div>

            <div class="col-12 col-md m-4">
                <font-awesome-icon :icon="['fas', 'truck-fast']" />
                <h5 class="title">
                    Consegna veloce
                </h5>
                <p class="subtitle m-4">
                    Consegna sempre puntuale
                    ancora più veloce.
                </p>
            </div>

            <div class="col-12 col-md m-4">
                <font-awesome-icon :icon="['fas', 'seedling']" />
                <h5 class="title">
                    Ottima qualità
                </h5>
                <p class="subtitle m-4">
                    Oltre che alla velocità la nostra priorità è la qualità!
                </p>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    @use '../assets/scss/partials/variables.scss' as *;
    @use '../../src/assets/scss/font.scss' as *;

    .title {
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        color: white;
        font-weight: 700;
        font-size: 1rem;
    }

    .subtitle {
        font-family: 'Open Sans', sans-serif;
        color: white;
        font-size: 1rem;
    }

    i {
        color: white;
    }

</style>
