<script>
import AppHeader from "./components/AppHeader.vue";
import CharactersList from "./components/CharactersList.vue";
import CharacterCard from "./components/CharacterCard.vue";
import AppLoader from "./components/AppLoader.vue";
import SearchInput from "./components/SearchInput.vue";

import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    CharactersList,
    CharacterCard,
    AppLoader,
    SearchInput,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    // get characters from BBApi
    getCharacters() {
      //start loading
      this.store.loading = true;
      //declare base url
      let apiUrl = "https://www.breakingbadapi.com/api/characters";

      //declare url obj params
      const urlParams = {};
      // if users search by name
      if (this.store.searchKey) {
        urlParams.name = this.store.searchKey;
      }
      // if users search ONLY by category
      if (!this.store.searchKey && this.store.category) {
        urlParams.category = this.store.category;
      }
      //axios call and give it the url obj params
      axios
        .get(apiUrl, {
          params: urlParams,
        })
        .then((resp) => {
          // fill characters in store with the response data
          this.store.characters = resp.data;
          // declare and empty array
          const retrievedCharacters = [];
          // iterate through each element of store characters and push them into retrievedCharacters with only the info we need
          for (let index = 0; index < this.store.characters.length; index++) {
            let element = this.store.characters[index];
            // console.log(element.name, element.status);
            const obj = {
              name: element.name,
              status: element.status,
              img: element.img,
              category: element.category,
            };

            retrievedCharacters.push(obj);
          }
          // initialise and empty array to filter retrievedCharacters
          let filteredCharacters = [];
          //if users search by Category and status
          if (this.store.category && this.store.status) {
            // console.log(this.store.category);
            //filter firt by category
            filteredCharacters = retrievedCharacters.filter(function (el) {
              return el.category.includes(store.category);
            });
            // console.log(filteredCharacters);
            //then by status
            filteredCharacters = filteredCharacters.filter(function (el) {
              return el.status === store.status;
            });
            // assign to store Characters the values of filteredCharacters
            this.store.characters = filteredCharacters;

            // console.log(retrievedCharacters);
            // console.log(filteredCharacters);
          }

          //if users search for ONLY by status
          if (this.store.status && !this.store.category) {
            // console.log(this.store.status);
            //filter firt by status
            filteredCharacters = retrievedCharacters.filter(function (el) {
              return el.status === store.status;
            });
            // assign to store Characters the values of filteredCharacters
            this.store.characters = filteredCharacters;
            // console.log(filteredCharacters);
          }
        })
        .catch((error) => {
          //manging error empting the array
          this.store.characters = [];
        })
        .finally(() => {
          //stop loading
          this.store.loading = false;
        });
    },
  },
  created() {
    this.getCharacters();
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <SearchInput @researchResults="getCharacters"></SearchInput>
    <CharactersList></CharactersList>
  </main>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
main {
  padding: 1em;
}
</style>
