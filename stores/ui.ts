import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    sidebar: false,
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    setSidebar(value: boolean) {
      this.sidebar = value;
    },
  },
});
