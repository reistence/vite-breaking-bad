<script>
import AppHeader from "./components/AppHeader.vue";
import CharactersList from "./components/CharactersList.vue";
import CharacterCard from "./components/CharacterCard.vue";
import AppLoader from "./components/AppLoader.vue";

import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    CharactersList,
    CharacterCard,
    AppLoader,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.store.loading = true;
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      this.store.characters = resp.data;
      this.store.loading = false;
    });
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <CharactersList></CharactersList>
  </main>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
