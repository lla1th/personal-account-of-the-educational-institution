import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api.js';

import { useRegistryLessons } from './registry';

export const useModalLessons = defineStore('modalCreateLessons', () => {
  const registryLessons = useRegistryLessons();

  const form = ref({
    id: null,
    name: '',
    code: '',
  });

  const $reset = () => {
    form.value = {
      id: null,
      name: '',
      code: '',
    };

    viewModal.value = false;
  };

  const viewModal = ref(false);

  const openModal = () => viewModal.value = !viewModal.value;

  /**
     * Изменения значения формы
     * @param content
     * @param key
     */
  const changeSidePage = ({ content, key }) => {
    form.value[key] = content;
  };

  /**
     * Создания кабинета
     */
  const createLessons = async () => {
    try {
      await Api.post('schedule/lessons', {
        ...form.value,
      });

      await registryLessons.getList();
      $reset();
    } catch (error) {
      console.error('ERROR CREATE CABINET::: ', error);
    }
  };

  return {
    form,
    viewModal,

    openModal,
    createLessons,
    changeSidePage,
  };
});
