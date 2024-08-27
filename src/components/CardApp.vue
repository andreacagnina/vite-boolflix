<script>
import { store } from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    data(){
        return{
            store,
        };
    },

    methods: {
        getFlagCLass(languageCode) {
            const langToCountry = {
                en: 'gb',
                ja: 'jp',
                ko: 'kr',
                zh: 'cn',
                hi: 'in',
                ta: 'in',
                ur: 'pk',
            };
            return langToCountry[languageCode] || languageCode;
    },
}
}
</script>

<template>
    <div v-if="store.results.length > 0">
        <h2>Risultati della ricerca:</h2>
        <ul>
            <li v-for="item in store.results" :key="item.id">
            <strong>Titolo:</strong> {{ item.title || item.name }} <strong>Titolo originale:</strong> {{ item.original_title || item.original_name }} <strong>Lingua originale:</strong> <span :class="`fi fi-${getFlagCLass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}}) <strong>Voto:</strong> ({{item.vote_average}})
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    
</style>