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
        // 5) in questa funzione converto il codice della lingua originale del film/serieTV nel codice della Nazione. Riporto solo le sigle diverse perchè la libreria riconosce da sola quelle uguali (es. lingua originale IT, paese IT). La scelta di questa selezione è ricaduta su vari tentativi ottenuti come test di ricerca. Se il valore non è presente in questo switch viene restituito il valore originale, ovvero il parametro lingua originale del film/serieTV
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
    <!-- 3) Ora che i risultati sono salvati su 2 array dello store, mostro il contenuto dei risultati solo se la loro lunghezza contiene degli elementi è maggiore di 0. Ciclo gli array dando delle chiavi univoche e tramite binding con operatore ternario assegno se presente nell'obj l'img di copertina del film e della serieTV altrimenti uso una img-toppa. Uso un v-show per mostrare il contenuto del titolo originale solo se questo è diverso dal titolo per evitare ripetizioni sgradevoli alla vista. -->


        <div class="card" v-for="item in store.movieResults" :key="`movie-${item.id}`">
            <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=Copertina+non+trovata`" class="card-img-top" >
            <div class="hiddenCard">
                <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>
                <div><strong>Titolo:</strong> {{item.title}}</div>
                <div v-show="item.title !== item.original_title"><strong>Titolo originale:</strong> {{ item.original_title}}</div>
                <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span>&nbsp;
                    <span v-for="(star, index) in Math.round(item.vote_average / 2)" :key="`FullStars-${index}`"><i class="fas fa-star golden"></i></span>
                    <span v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="`EmptyStars-${index}`"><i class="far fa-star golden"></i></span> 
                </div>
                <div v-if="item.overview" class="overflow">
                    <strong>Overview:</strong> {{item.overview}}
                </div>
            </div>
        </div>



    <!-- <div v-if="store.seriesResults.length > 0"> 
        <h2>Serie TV trovate: {{store.seriesResults.length}} </h2>
        <ul>
            <li v-for="item in store.seriesResults" :key="item.id">
                <img :src="item.poster_path ? (`https://image.tmdb.org/t/p/w342/${item.poster_path}`) : `https://placehold.co/342x513?text=Copertina+non+trovata`"> <br>

            <div><strong>Titolo:</strong> {{ item.name }} </div>

            <div v-show="item.name !== item.original_name"><strong>Titolo originale:</strong>{{ item.original_name}}</div>

            <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>

            <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span> 
            <span v-for="(star, index) in Math.round(item.vote_average / 2)" :key="index"> <i class="fas fa-star golden"></i></span> 
            <span v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="index"><i class="far fa-star golden"></i></span> 
        </div>
            </li>
        </ul>
    </div> -->

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