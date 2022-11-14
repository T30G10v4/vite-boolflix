<script>
import { store } from "../store.js"

export default {

    name: "AppCardList",
    data() {

        return {

            store

        }

    },
    methods: {



    }

}

</script>

<template> 

<div v-for="(card, index) in store.movies" key="index" class="card">{{ card.title }} - {{card.original_title}} - 
    <img :src="`../assets/flags/${card.original_language}.gif`"> - {{card.original_language}} - {{card.vote_average}}</div>








</template>
   



<style></style>