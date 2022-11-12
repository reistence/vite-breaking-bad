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
    <div class="results p-2" v-show="!store.loading">
      <p v-if="store.characters.length > 0">
        {{ store.characters.length }} Found
      </p>
      <div v-else class="not-found">
        <img src="../assets/img/Immagine-36.png" alt="" />
        <p>404 Not Found</p>
      </div>
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
  background-color: rgba(255, 255, 255, 0.049);
  border-radius: 10px;
  min-height: 500px;
  .results {
    background-color: $search-results;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;

    margin-bottom: 1em;
    p {
      margin-bottom: 0;
    }
    .not-found {
      position: relative;
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $card-txt;
        font-size: 3rem;
      }
    }
  }

  .character-list {
    .col {
      transition: 200ms;
    }
    .col:hover {
      transform: scale(1.1);
    }
  }
}
</style>
