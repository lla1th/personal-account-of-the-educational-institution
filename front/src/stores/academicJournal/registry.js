import { defineStore } from 'pinia';
import { ref } from 'vue';
import studySubjects from '../../entities/studySubjects';

export const useRegistryAcademicJournal = defineStore('registryAcademicJournal', () => {
  const menuListStudySubjects = ref(studySubjects());

  return {
    menuListStudySubjects,
  };
});
