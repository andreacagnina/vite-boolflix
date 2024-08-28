<script>
import { store } from '../store.js';

export default {
    data() {
        return {
        searchQuery: "",
        store,
        };
    },
    methods: {
// 2) con questa funzione vado nello store dove viene fatta la mia chiamata API dei film e passo il valore inserito nell'input come param, dopo viene restituita una risposta asincrona con then e il risultato viene salvato nell'array movieResults dello store. Lo stesso viene fatto per le serie TV con un return che ha il ruolo di concatenare i 2 risultati.
        searchContent() {
            store.searchMovie(this.searchQuery).then(movieResults => {

                store.movieResults = movieResults;

                return store.searchSeries(this.searchQuery);
            })
            .then(seriesResults => {
                store.seriesResults = seriesResults;
            })
            }
        }
}
</script>

<template>
    <!-- 1) creo un campo input e un bottone. Al press di invio e al click del bottone lancio un funzione -->
    <div>
        <input v-model="searchQuery" placeholder="Cerca un film o una serie..." @keypress.enter="searchContent"/>
        <button @click="searchContent">Cerca</button>

    </div>
</template>

<style lang="scss" scoped>
    
</style>