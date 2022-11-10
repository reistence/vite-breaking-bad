<script>
// import CharacterCard from "./CharacterCard.vue";
import { store } from "../store";
import CharacterCard from "./CharacterCard.vue";
import AppLoader from "./AppLoader.vue";
export default {
  name: "CharactersList",
  components: {
    CharacterCard,
    AppLoader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container py-3">
    <div class="results p-2">
      <p>Found {{ store.characters.length }} characters</p>
    </div>

    <div class="character-list p-2">
      <AppLoader v-if="store.loading"></AppLoader>
      <div
        v-else
        class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-3"
      >
        <div
          class="col"
          v-for="character in store.characters"
          :key="character.char_id"
        >
          <CharacterCard :character="character"></CharacterCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.container {
  background-color: white;
  .results {
    background-color: $search-results;

    margin-bottom: 1em;
    p {
      margin-bottom: 0;
    }
  }

  .character-list {
    border: 1px solid black;

    .col {
      transition: 200ms;
    }
    .col:hover {
      transform: scale(1.05);
    }
  }
}
</style>
