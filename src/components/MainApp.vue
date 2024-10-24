<script>
import CardSeriesApp from './CardSeriesApp.vue';
import CardMoviesApp from './CardMoviesApp.vue';
import { store } from '../store.js';
// 7)uso il mio componente card all'interno del main
export default {
    components: {
        CardMoviesApp,
        CardSeriesApp
    },
    data() {
        return {
            store,
            CardMoviesApp,
            CardSeriesApp,
        };
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content text-center">
                        <div v-if="store.movieResults.length > 0 || store.seriesResults.length > 0">
                            <h2>Trovati {{ store.movieResults.length }} film e {{ store.seriesResults.length }} serie TV
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="col-12" v-if="store.movieResults.length > 0">
                    <div class="content">
                        <h3>Lista dei film di tuo interesse:</h3>
                    </div>
                </div>
                <CardMoviesApp />

                <div class="col-12" v-if="store.seriesResults.length > 0">
                    <div class="content">
                        <h2>Lista delle serie TV di tuo interesse:</h2>
                    </div>
                </div>
                <CardSeriesApp />
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped></style>