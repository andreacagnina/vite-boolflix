<script>
import MainApp from './components/MainApp.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
    components: {
        MainApp,
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
<MainApp />
</template>

<style lang="scss">
@use './style/generals.scss'
    
</style>
