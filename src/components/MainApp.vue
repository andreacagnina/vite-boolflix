<script>

import { store } from '../store.js';

export default {
    components: {

    },
    data() {
        return {
        store,
        }
    },
}
</script>

<template>
    <div v-if="store.results.length > 0">
        <h2>Risultati della ricerca:</h2>
        <ul>
            <li v-for="item in store.results" :key="item.id">
            <strong>Titolo:</strong> {{ item.title || item.name }} <strong>Titolo originale:</strong> {{ item.original_title || item.original_name }} <strong>Lingua originale:</strong> ({{ item.original_language }}) <strong>Voto:</strong> ({{ item.vote_average }}) ({{ item.release_date }})
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
    
</style>