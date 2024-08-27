<script>
import CardApp from './CardApp.vue';
import { store } from '../store.js';

export default {
    components: {
CardApp,
    },
    data() {
        return {
        store,
        }
    },
}
</script>

<template>
<CardApp />
</template>

<style lang="scss" scoped>
    
</style>