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
        // 2) uso una funzione wrapper che richiama 2 funzioni diverse che vengono eseguite in parallelo in maniera indipendente
        searchContent(){
            this.searchMovies();
            this.searchSeries();
        },
        searchMovies(){
            store.searchMovie(this.searchQuery).then(movieResults => { store.movieResults = movieResults;        
            })
                },
        searchSeries(){
            store.searchSeries(this.searchQuery).then(seriesResults => { store.seriesResults = seriesResults;        
            })
                },
        }
}
</script>

<template>
    <!-- 1) creo un campo input e un bottone. Al press di invio e al click del bottone lancio un funzione -->
    <div>
        <input class="me-2 p-1" v-model="searchQuery" placeholder="Cerca un film o una serie..." @keypress.enter="searchContent"/>
        <button class="btn btn-outline-light align-baseline" @click="searchContent">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>