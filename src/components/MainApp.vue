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
        };
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content text-center">
                        <div v-if="store.movieResults.length > 0 || store.seriesResults.length > 0"> 
                            <h2>Trovati {{store.movieResults.length}} film e {{store.seriesResults.length}} serie TV</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="content bg-danger">
                        <CardApp />
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>

    
</style>