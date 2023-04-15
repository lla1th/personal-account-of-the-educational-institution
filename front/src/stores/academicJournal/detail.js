import { defineStore } from 'pinia';
import { ref } from 'vue';
import students from '../../entities/students';

export const useDetailAcademicJournal = defineStore('detailAcademicJournal', () => {
  const items = ref(students());

  const addNewAssessmentFromStudent = (payload) => {
    items.value = [...items.value, { ...payload, id: '10' }];
  };

  return {
    items,

    addNewAssessmentFromStudent,
  };
});
