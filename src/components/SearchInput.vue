<script>
import { store } from "../store";

export default {
  name: "SearchInput",
  data() {
    return {
      store,
      categoryOptions: ["Breaking Bad", "Better Call Saul"],
      statusOptions: ["Alive", "Deceased", "Presumed dead"],
    };
  },
};
</script>

<template>
  <div class="container my-3">
    <div class="input d-flex justify-content-flex-start">
      <input
        type="text"
        id="searchKey"
        placeholder="Search a Character"
        v-model="store.searchKey"
      />
      <select name="category" id="searchCategory" v-model="store.category">
        <option value="">Choose a category</option>
        <option
          v-for="(option, index) in categoryOptions"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <select name="status" id="searchStatus" v-model="store.status">
        <option value="">Choose a status</option>
        <option
          v-for="(status, index) in statusOptions"
          :key="index"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
      <button @click="$emit('researchResults')">Search</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.input {
  gap: 2em;
  align-items: center;
  input {
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    width: 20em;
  }
  select {
    border: none;
    padding: 0.5em;
    border-radius: 5px;
  }
  button {
    padding: 0.7em 2em;
    border: none;
    border-radius: 10px;
    color: white;
    background-image: url("../assets/img/76a6c6515947b290b00bc2efd3f00833.png");
    background-size: cover;
  }
}
</style>
