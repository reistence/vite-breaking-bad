<script>
import AppHeader from "./components/AppHeader.vue";
import CharactersList from "./components/CharactersList.vue";
import CharacterCard from "./components/CharacterCard.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    CharactersList,
    CharacterCard,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      this.store.characters = resp.data;
      console.log(this.store.characters);
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
