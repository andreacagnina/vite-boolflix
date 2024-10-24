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
    <header class="p-2 bg-dark">
        <nav class="navbar bg-dark bg-body-light">
            <div class="container-fluid">
                <span class="navbar-brand text-danger text-uppercase fs-1">BoolFlix</span>
                <SearchBar />
            </div>
        </nav>
    </header>

</template>

<style lang="scss" scoped></style>