import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRegistryChangeSchedule = defineStore('registryChangeSchedule', () => {
  const elements = ref([]);

  return {
    elements,
  };
});
