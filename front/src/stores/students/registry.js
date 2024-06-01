import { defineStore } from 'pinia';
import { ref } from 'vue';
import Api from '../../utils/Api';

export const useRegistryStudents = defineStore('registryStudents', () => {
  const students = ref([]);

  const getList = async () => {
    const data = await Api.get('student');

    students.value = data.data;
  };

  const deleteStudent = async () => {
    await Api.delete('student');
    await getList()
  };

  return {
    students,

    getList,
    deleteStudent,
  };
});
