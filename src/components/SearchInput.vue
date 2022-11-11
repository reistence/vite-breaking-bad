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
    <div class="d-flex gx-5 justigy-content-center">
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
</style>
