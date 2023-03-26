import { ref } from 'vue';
import { defineStore } from 'pinia';
import mockDataTable from '@/models/calendary/entities/mockDataTable';

export const useCalendarStore = defineStore('calendar', () => {
  const elements = ref(mockDataTable());
  const search = ref(null);

  const searchSchedule = (event) => {
    search.value = event;
  };
  return {
    elements,
    search,
    searchSchedule,
  };
});
