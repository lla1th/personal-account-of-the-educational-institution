import { defineStore } from 'pinia';
import { ref } from 'vue';
import Api from '../../utils/Api';

export const useRegistryStudents = defineStore('registryStudents', () => {
  const students = ref([]);

  const getList = async () => {
    const data = await Api.get('student');

    students.value = data.data;
  };

  const deleteStudent = async (item) => {
    await Api.delete(`student/delete/${item}`);
    await getList()
  };

  return {
    students,

    getList,
    deleteStudent,
  };
});
