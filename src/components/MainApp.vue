<script>
import CardApp from './CardApp.vue';
import { store } from '../store.js';
// 7)uso il mio componente card all'interno del main
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