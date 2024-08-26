<script>
import SearchBar from './components/SearchBar.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
    components: {
        SearchBar,
    },
    data() {
        return {
        store,
        }
    },
methods: {

    },
}
</script>

<template>
<SearchBar />
</template>

<style lang="scss">
@use './style/generals.scss'
    
</style>
