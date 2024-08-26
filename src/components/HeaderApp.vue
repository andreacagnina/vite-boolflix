<script>
import SearchBar from './SearchBar.vue';
import { store } from '../store.js';

export default {
    components: {
        SearchBar,
    },
    data() {
        return {
        store,
        }
    },
}
</script>

<template>
<header>
<SearchBar/>
</header>
</template>

<style lang="scss" scoped>
    
</style>