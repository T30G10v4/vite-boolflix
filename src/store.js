import { reactive } from "vue"

export const store = reactive({

    movies: [],
    tvShows: [],
    onLoading: false,
    key: "77447149c9566d125915825a9ce7fb7f",
    imagesURL: "https://image.tmdb.org/t/p/w500/",
    baseURL: "https://api.themoviedb.org/3/",
    moviesURL: "https://api.themoviedb.org/3/search/movie",
    tvShowsURL: "https://api.themoviedb.org/3/search/tv",
    search: ""

});

