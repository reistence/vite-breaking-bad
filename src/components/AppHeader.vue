<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container-fluid py-2">
      <div class="logo">
        <img src="../assets/img/bb-logo.png" alt="" />
        <h1>Breaking Bad API</h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3em;
  img {
    height: 70px;
  }
  h1 {
    width: max-content;
    font-size: 1.5rem;
  }
}
</style>
