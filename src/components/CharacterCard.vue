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
    <div class="card-txt">
      <h3 class="text-center mt-3">{{ character.name }}</h3>
      <h4>{{ character.category }}</h4>
      <h5>{{ character.status }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.character-card {
  background-color: $bg-primary;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 9s;

  // .card-img {
  img {
    object-fit: cover;
    height: 260px;
    width: 100%;
    border-radius: 5px;
  }

  .card-txt {
    width: 100%;
    position: absolute;
    background-color: #33462ec1;
    bottom: 0;
    left: 0;
    display: none;
    animation: height 300ms linear;

    h3 {
      font-size: 1rem;
      margin-top: 0.5em;
    }
    h4 {
      color: $card-txt;
      font-size: 0.7rem;
      font-weight: 200;

      text-align: center;
    }
    h5 {
      color: $card-txt;
      font-size: 0.7rem;
      font-weight: 200;
      text-align: center;
    }
  }

  &:hover .card-txt {
    display: block;
  }

  @keyframes height {
    0% {
      height: 0px;
    }
    50% {
      height: 50px;
    }
    75% {
      height: 80px;
    }
    100% {
      height: fit-content;
    }
  }
}

// }
</style>
