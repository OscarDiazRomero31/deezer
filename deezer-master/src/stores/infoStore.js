import { defineStore } from "pinia";

export const useInfoStore = defineStore("infoStore", {
  state: () => ({
    selectedType: null,
    selectedItem: null,
  }),

  actions: {
    setInfo(type, item) {
      if (!item) {
        console.error("❌ Error: Intentando guardar un objeto vacío en el store.");
        return;
      }
      console.log("🛠️ setInfo ejecutado correctamente:", type, item);
      this.selectedType = type;
      this.selectedItem = item;
    },

  

      clearInfo() {
        this.selectedType = null;
        this.selectedItem = null;
    }
    
      
      
      
  }
});
