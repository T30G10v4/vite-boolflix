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

        }

        
    }

}

</script>

<template>

    <h3>{{ getTitleOrName }}</h3>
    <p>{{ getOriginalTitleOrOriginalName }}</p>
    <img :src="getImageUrl(`../assets/flags/${card.original_language}.gif`)">
    <p>{{ card.vote_average }}</p>

</template>

<style scoped>
    img {
        
        width: 40px;
        height: 30px;
       

    }
</style>