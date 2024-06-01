import { defineStore } from 'pinia';
import { ref } from 'vue';
// eslint-disable-next-line import/extensions
import Api from '../../utils/Api.js';
import {useRegistryStudents} from "@/stores/students/registry.js";

export const useModalStudents = defineStore('modalStudents', () => {
  const viewModalCreateGrade = ref(false);
    const registryStudents = useRegistryStudents();


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
        const { id, ...data } = form.value;
      await Api.post('student/create', { major: '32132', name: data.name, age: data.age, grade: data.grade, student: { ...data, major: '32132'} });
        await registryStudents.getList();
        $reset();
      return;
    }
    await Api.put(`student/${form.value.id}`, { ...form.value, major: 'test' });
    await registryStudents.getList();
    $reset();
  };

  const openUpdateModal = async (payload) => {
    form.value = {
        id: payload.id,
        name: payload.name,
        age: payload.age,
        grade: payload.grade,
    };

    viewModalCreateGrade.value = true;
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
  openUpdateModal,
  };
});
