<script>
import { store } from "../store.js"
import AppSingleCard from "./AppSingleCard.vue";

export default {
    name: "AppCardList",
    data() {
        return {
            store
        };
    },
    methods: {
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    },
    components: { AppSingleCard }
}

</script>

<template> 

<AppSingleCard v-for="(movie, index) in store.movies" key="index" class="card" :card="movie"/>

<AppSingleCard v-for="(tvShow, index) in store.tvShows" key="index" class="card" :card="tvShow"/>


</template>

<style scoped>

img {

    width: 40px;
    height: 30px;

}
</style>