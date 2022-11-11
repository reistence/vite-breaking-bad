<script>
export default {
  name: "AppLoader",
};
</script>

<template>
  <div><i class="fa-solid fa-vial"></i></div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

div {
  margin: 2em auto;
  width: 10%;

  color: $card-txt;
  i {
    font-size: 5rem;
    animation: loading ease 300ms infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(50deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
