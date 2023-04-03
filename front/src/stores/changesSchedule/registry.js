import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRegistryChangeSchedule = defineStore('registryChangeSchedule', () => {
  const elements = ref([]);

  const addNewScheduleItem = (item) => {
    elements.value = [...elements.value, { ...item, id: Math.random() }];
  };

  return {
    elements,

    addNewScheduleItem,
  };
});
