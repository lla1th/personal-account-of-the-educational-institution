import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api';

import { useModalLessons } from './modal';

export const useRegistryLessons = defineStore('registryLessons', () => {
  const modalLessons = useModalLessons();

  const lessons = ref([]);

  const openModal = () => modalLessons.openModal();

  const getList = async () => {
    const { data: { data } } = await Api.get('schedule/lessons');

    lessons.value = data;
  };

  return {
    lessons,

    openModal,
    getList,
  };
});
