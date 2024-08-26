<script>
import { store } from '../store.js';

export default {
    data() {
        return {
        searchQuery: "",
        results: [],
        };
    },
    methods: {
        async searchContent() {
            if (this.searchQuery) {
                let movieResults = await store.searchMovie(this.searchQuery);
                let seriesResults = await store.searchSeries(this.searchQuery);
                this.results = [...movieResults, ...seriesResults]
                
            }
        }
    }
}
</script>

<template>
    <div>
        <input v-model="searchQuery" placeholder="Cerca un film o una serie..." @keypress.enter="searchContent"/>
        <button @click="searchContent">Cerca</button>

        <div v-if="results.length > 0">
            <h2>Risultati della ricerca:</h2>
            <ul>
                <li v-for="item in results" :key="item.id">
                <strong>Titolo:</strong> {{ item.title || item.name }} <strong>Titolo originale:</strong> {{ item.original_title || item.original_name }} <strong>Lingua originale:</strong> ({{ item.original_language }}) <strong>Voto:</strong> ({{ item.vote_average }}) ({{ item.release_date }})
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>