<script>
import { store } from "./store"

import axios from 'axios';

import AppSearchBar from "./components/AppSearchBar.vue";
import AppCardList from "./components/AppCardList.vue";

export default {

  components: {

    AppSearchBar,
    AppCardList

  },
  data() {
    
    return {

      store

    }
  },
  methods: {

    performSearch() {
      store.movies = [];
      axios
      
        .get(`${store.moviesURL}?api_key=${store.key}&query=${store.search}`)
        .then((res) => {

          
          store.movies = res.data.results;
          console.log(res.data.results);

      });
  }

}

}
</script>

<template>

  <AppSearchBar @doSearch="performSearch()" />
  <AppCardList />

</template>

<style>
</style>
