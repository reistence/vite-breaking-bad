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
    getCharacters() {
      this.store.loading = true;
      let apiUrl = "https://www.breakingbadapi.com/api/characters";

      const urlParams = {};
      if (this.store.searchKey) {
        urlParams.name = this.store.searchKey;
      }
      if (this.store.category) {
        urlParams.category = this.store.category;
      }
      if (this.store.status) {
        urlParams.status = this.store.status;
      }

      axios
        .get(apiUrl, {
          params: urlParams,
        })
        .then((resp) => {
          this.store.characters = resp.data;
        })
        .catch((error) => {
          this.store.characters = [];
        })
        .finally(() => {
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
