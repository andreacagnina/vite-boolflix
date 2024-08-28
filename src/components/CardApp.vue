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

    <!-- <div v-if="store.movieResults.length > 0"> 
        <h2>Film trovati: {{store.movieResults.length}} </h2> -->

        <div class="card" style="width: 18rem;" v-for="item in store.movieResults" :key="`movie-${item.id}`">
            <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=Copertina+non+trovata`" class="card-img-top" >
        </div>


        <ul>
            <li v-for="item in store.movieResults" :key="`movie-${item.id}`">
                <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=Copertina+non+trovata`"> 

            <!-- <div><strong>Titolo:</strong> {{ item.title}}</div> -->

            <div v-show="item.title !== item.original_title"><strong>Titolo originale:</strong>{{ item.original_title}}</div>
<!-- 4) Dopo avere installato una libreria per avere le bandiere dei paesi del mondo, creo delle icone dinamiche modificando la classe di uno span in cui richiamo una funzione a cui passo il parametro della lingua originale del film/serieTV. -->
            <div><strong> Lingua originale:</strong> <span :class="`fi fi-${getFlagClass(item.original_language)}`"></span> ({{item.original_language.toUpperCase()}})</div>
<!-- 6) Recupero la media dei voti che va da 0 a 10 e la divido per 2 in modo da avere un voto che va da 0 a 5 e stampo il risultato. Faccio 2 cicli, il primo per stampare delle stelle piene e utilizzo math.round perchè arrotonda all'intero più vicino (es. 4.2 a 4, 4.8 a 5), assegno delle chiavi uniche e dopo avere installato la libreria di fontawesome, metto l'icona delle stelle piene. A seguire, le stelle vuote saranno semplicemente il voto max (5) - il numero di stelle piene -->
            <div><strong>Voto:</strong> <span>{{Math.round(item.vote_average / 2)}}</span> 
            <span v-for="(star, index) in Math.round(item.vote_average / 2)" :key="`FullStars-${index}`"> <i class="fas fa-star golden"></i></span> 
            <span v-for="(star, index) in (5 - Math.round(item.vote_average / 2))" :key="`EmptyStars-${index}`"><i class="far fa-star golden"></i></span> 
            </div>
            </li>
        </ul>
    <!-- </div> -->

    <div v-if="store.seriesResults.length > 0"> 
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
    </div>

</template>

<style lang="scss" scoped>
.golden {
    color:gold;
}

    
</style>