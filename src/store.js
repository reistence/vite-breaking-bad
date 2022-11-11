import { reactive } from "vue";

export const store = reactive({
  characters: [],
  loading: false,
  searchKey: "",
  category: "",
  status: "",
});
