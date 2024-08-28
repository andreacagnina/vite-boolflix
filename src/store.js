import { reactive } from "vue";
import axios from "axios";
// 0) Ottengo la parte iniziale del link dei film e delle SerieTV, salvo una variabile la mia chiave e creo 2 array vuoti che userò dopo. Dopo avere installato la libreria axios, credo 2 funzioni con parametro che mi restituiscono il link dinamico composto dai primi 2 elementi e dal valore inserito nel campo Input.
export const store = reactive({
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
    apiKey: '9ecb0ac4f7544fe9fe3331cabc921213',
    movieResults: [],
    seriesResults: [],


    searchMovie(movieName) {
        return axios.get(`${this.apiUrlMovie}?api_key=${this.apiKey}&query=${movieName}`).then(response => { return response.data.results; });
    },
    searchSeries(seriesName) {
        return axios.get(`${this.apiUrlSeries}?api_key=${this.apiKey}&query=${seriesName}`).then(response => { return response.data.results; });
    }

});