import { defineStore } from 'pinia';
import { ref } from 'vue';
import studySubjects from '../../entities/studySubjects';

export const useRegistryAcademicJournalTeacher = defineStore('registryAcademicJournalTeacher', () => {
  const menuListStudySubjects = ref(studySubjects());

  return {
    menuListStudySubjects,
  };
});
