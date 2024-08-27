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
    <div v-if="store.movieResults.length > 0"> 
        <h2>Film trovati:</h2>
        <ul>
            <li v-for="item in store.movieResults" :key="item.id">
                <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://picsum.photos/342/513`"> <br>
            <div><strong>Titolo:</strong> {{ item.title}}</div>
            <div v-show="item.title !== item.original_title"><strong>Titolo originale:</strong>{{ item.original_title}}</div>
            <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>
            <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span> 
            <span class="star" v-for="(star, index) in Math.round(item.vote_average / 2)" :key="index"> <i class="fas fa-star"></i></span> 
            <span class="star" v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="index"><i class="far fa-star"></i></span> 
            </div>
            </li>
        </ul>
    </div>
    <div v-if="store.seriesResults.length > 0"> 
        <h2>Serie TV trovate:</h2>
        <ul>
            <li v-for="item in store.seriesResults" :key="item.id">
                <img :src="item.poster_path ? (`https://image.tmdb.org/t/p/w342/${item.poster_path}`) : `https://picsum.photos/342/513`"> <br>
            <div><strong>Titolo:</strong> {{ item.name }} </div>
            <div v-show="item.name !== item.original_name"><strong>Titolo originale:</strong>{{ item.original_name}}</div>
            <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>
            <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span> 
            <span class="star" v-for="(star, index) in Math.round(item.vote_average / 2)" :key="index"> <i class="fas fa-star"></i></span> 
            <span class="star" v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="index"><i class="far fa-star"></i></span> 
        </div>
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
.star {
    color:gold;
}

    
</style>