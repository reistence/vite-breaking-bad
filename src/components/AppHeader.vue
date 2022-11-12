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
        <h1><span>A</span>pi</h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3em;
  img {
    height: 150px;
  }
  h1 {
    width: max-content;
    font-size: 1.7rem;
    color: #2b4416;
    align-self: flex-end;
    span {
      color: white;
      background-image: linear-gradient(#385c1c, #2b4416);
      padding: 0 0.2em;
      position: relative;
      &::after {
        content: "32";
        color: white;
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 0.3rem;
      }
    }
  }
}
</style>
