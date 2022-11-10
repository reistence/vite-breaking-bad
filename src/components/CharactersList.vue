<script>
// import CharacterCard from "./CharacterCard.vue";
import { store } from "../store";
import CharacterCard from "./CharacterCard.vue";
export default {
  name: "CharactersList",
  components: {
    CharacterCard,
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
      <p>Found x characters</p>
    </div>

    <div class="character-list p-2">
      <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
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
    background-color: $bg-primary;
    vertical-align: middle;
    margin-bottom: 1em;
    p {
      vertical-align: middle;
      margin-bottom: 0;
    }
  }

  .character-list {
    border: 1px solid black;
  }
}
</style>
