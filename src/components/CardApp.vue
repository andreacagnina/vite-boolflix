<script>
import { store } from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    setup() {
        const getFlagCLass = (languageCode) => {
            const languageToCountry = {
                en: 'us',
                fr: 'fr',
                it: 'it',
                de: 'de',
                ja: 'jp',
            };
            return languageToCountry[languageCode] || languageCode;
        };
        return {
        store,
        getFlagCLass
        }
    },
}
</script>

<template>
    <div v-if="store.results.length > 0">
        <h2>Risultati della ricerca:</h2>
        <ul>
            <li v-for="item in store.results" :key="item.id">
            <strong>Titolo:</strong> {{ item.title || item.name }} <strong>Titolo originale:</strong> {{ item.original_title || item.original_name }} <strong>Lingua originale:</strong> <span :class="`fi fi-${getFlagCLass(item.original_language)}`"></span> <strong>Voto:</strong> ({{ item.vote_average }}) ({{ item.release_date }})
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    
</style>