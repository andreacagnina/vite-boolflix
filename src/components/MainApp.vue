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
<SearchBar/>
</template>

<style lang="scss" scoped>
    
</style>