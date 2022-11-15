<script>

export default {

    name: "AppSingleCard",
    props: {

        card: Object

    },
    data() {

        return {

            

        }

    },
    methods: {

        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
        

    },
    computed: {

        getTitleOrName() {

            return this.card.title ? this.card.title : this.card.name;

        },
        getOriginalTitleOrOriginalName() {

            return this.card.original_title ? this.card.original_title : this.card.original_name;

        },
        getStarsFromVote() {

           
            return Math.ceil(this.card.vote_average / 2);

        },
        getEmptyStarsFromVote() {

            return 5 - (Math.ceil(this.card.vote_average / 2));

        }

        
    }

}

</script>

<template>

    <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="">
    <h3>{{ getTitleOrName }}</h3>
    <p>{{ getOriginalTitleOrOriginalName }}</p>
    <img class="flag" :src="getImageUrl(`../assets/flags/${card.original_language}.gif`)">
    <span class ="star" v-for="star in getStarsFromVote">&starf;</span>
    <span class ="empty-star" v-for="emptyStar in getEmptyStarsFromVote">&star;</span>

</template>

<style scoped>
    img.flag {
        
        width: 40px;
        height: 30px;
       

    }

    .star {

        color: yellow;

    }
</style>