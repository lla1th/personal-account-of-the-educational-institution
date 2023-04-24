import { defineStore } from 'pinia';
import { ref } from 'vue';
import studyTeacher from '../../entities/studyTeacher';

export const useRegistryAcademicJournalStudent = defineStore('registryAcademicJournalStudent', () => {
  const menuListStudySubjects = ref(studyTeacher());

  return {
    menuListStudySubjects,
  };
});
