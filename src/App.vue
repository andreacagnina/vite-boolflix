<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
    components: {
        MainApp,
        HeaderApp,
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
<HeaderApp />
<MainApp />
</template>

<style lang="scss">
@use './style/generals.scss'
    
</style>
