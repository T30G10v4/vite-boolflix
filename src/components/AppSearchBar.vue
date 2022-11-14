<script>
import { store } from "../store.js"
export default {

    name: "AppSearchBar",
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

    <input v-model="store.search" type="text">
    <button @click="$emit('doSearch')">Search</button>

</template>

<style scoped>
</style>