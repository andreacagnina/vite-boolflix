<script>
import { store } from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    data(){
        return{
            store,
        };
    },

    methods: {
        getFlagClass(languageCode) {
            switch (languageCode){
                case 'en':
                    return 'gb';
                case 'ja':
                    return 'jp';
                case 'ko':
                    return 'kr';
                case 'zh':
                    return 'cn';
                case 'hi':
                case 'ta':
                    return 'in';
                case 'ur':
                    return 'pk';
                default:
                    return languageCode;
        }
    },
}
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-3" v-for="item in store.seriesResults" :key="`movie-${item.id}`">
        <div class="card mt-4">
            <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=Copertina+non+trovata`" class="card-img-top" >
            <div class="hiddenCard">
                <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>
                <div><strong>Titolo:</strong> {{item.name}}</div>
                <div v-show="item.name !== item.original_name"><strong>Titolo originale:</strong> {{ item.original_name}}</div>
                <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span>&nbsp;
                    <span v-for="(star, index) in Math.round(item.vote_average / 2)" :key="`FullStars-${index}`"><i class="fas fa-star golden"></i></span>
                    <span v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="`EmptyStars-${index}`"><i class="far fa-star golden"></i></span> 
                </div>
                <div v-if="item.overview" class="overflow">
                    <strong>Overview:</strong> {{item.overview}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.golden {
    color:gold;
}

.hiddenCard {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
}

.card:hover .hiddenCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}

.overflow {
    overflow-y: auto;
}

    
</style>