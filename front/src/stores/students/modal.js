import { defineStore } from 'pinia';
import { ref } from 'vue';
// eslint-disable-next-line import/extensions
import Api from '../../utils/Api.js';

export const useModalStudents = defineStore('modalStudents', () => {
  const viewModalCreateGrade = ref(false);

  const form = ref({
    id: null,
    name: null,
    age: null,
    grade: null,
  });

  const $reset = () => {
    viewModalCreateGrade.value = false;

    form.value = {
      id: null,
      name: null,
      age: null,
      grade: null,
    };
  };

  const createAssessment = async () => {
    if (!form.value.id) {
      await Api.post('students', form.value);
      return;
    }
    await Api.put('students', form.value);
    $reset();
  };

  const cancelModal = () => {
    $reset();
  };

  return {
    /** Очистка */
    $reset,

    /** Хранилища */
    viewModalCreateGrade,
    form,

    cancelModal,
    createAssessment,
  };
});
