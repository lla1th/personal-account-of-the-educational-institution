import { defineStore } from 'pinia';
import { ref } from 'vue';
import moment from 'moment';

export const useModalAcademicJournal = defineStore('modalAcademicJournal', () => {
  const viewModalCreateGrade = ref(false);

  const form = ref({
    date: moment(new Date()).format('DD.MM.YYYY'),
    message: '',
    student: null,
  });

  return {
    viewModalCreateGrade,
    form,
  };
});
