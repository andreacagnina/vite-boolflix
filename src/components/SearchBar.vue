<script>
import { store } from '../store.js';

export default {
    data() {
        return {
        store,
        inputTitle:"",
        }
    },
}
</script>

<template>
    <div>
        <input type="text" required v-model="inputTitle" placeholder="Inserisci un titolo di un film"> <button>Invia</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>