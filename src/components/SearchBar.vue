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
        searchContent() {
                store.searchMovie(this.searchQuery)
                    .then(movieResults => {
                        return store.searchSeries(this.searchQuery)
                            .then(seriesResults => {
                                store.results = [...movieResults, ...seriesResults];
                            });
                    })
            }
        }
    }
</script>

<template>
    <div>
        <input v-model="searchQuery" placeholder="Cerca un film o una serie..." @keypress.enter="searchContent"/>
        <button @click="searchContent">Cerca</button>

    </div>
</template>

<style lang="scss" scoped>
    
</style>