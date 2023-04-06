import { defineStore } from 'pinia';
import { ref } from 'vue';
import students from '../../entities/students';

export const useDetailAcademicJournal = defineStore('detailAcademicJournal', () => {
  const items = ref(students());

  return {
    items,
  };
});
