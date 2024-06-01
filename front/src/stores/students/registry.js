import { defineStore } from 'pinia';
import { ref } from 'vue';
import Api from '../../utils/Api';

export const useRegistryStudents = defineStore('registryStudents', () => {
  const students = ref([]);

  const getList = async () => {
    const { data: { data } } = await Api.get('students');

    students.value = data;
  };

  return {
    students,

    getList,
  };
});
