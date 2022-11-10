<script>
export default {
  name: "CharacterCard",
  props: {
    character: Object,
  },
};
</script>

<template>
  <div class="character-card p-1">
    <!-- <div class="card-img p-1"> -->
    <img :src="character.img" :alt="character.name" />
    <!-- </div> -->
    <h3 class="text-center mt-3">{{ character.name }}</h3>
    <h4>{{ character.category }}</h4>
    <h5>{{ character.status }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.character-card {
  background-color: $bg-primary;

  // .card-img {
  img {
    object-fit: cover;
    height: 260px;
    width: 100%;
  }
}
h3 {
  font-size: 1rem;
  margin-top: 0.5em;
}
h4 {
  color: $card-txt;
  font-size: 0.8rem;
  font-weight: 200;
  text-align: center;
}
h5 {
  color: $card-txt;
  font-size: 0.7rem;
  font-weight: 200;
  text-align: center;
}
// }
</style>
