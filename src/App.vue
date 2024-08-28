<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
    components: {
        MainApp,
        HeaderApp,

    },
    data() {
        return {
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
