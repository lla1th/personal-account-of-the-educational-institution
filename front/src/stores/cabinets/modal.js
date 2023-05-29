import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api.js';

import { useRegistryCabinet } from './registry';

export const useModalCreateCabinet = defineStore('modalCreateCabinet', () => {
  const registryCabinet = useRegistryCabinet();

  const form = ref({
    id: null,
    fullName: '',
    shortName: '',
  });

  const $reset = () => {
    form.value = {
      id: null,
      fullName: '',
      shortName: '',
    };
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
  const createCabinet = async () => {
    try {
      await Api.post('schedule/cabinet/', {
        ...form.value,
      });

      await registryCabinet.getList();
      viewModal.value = false;
      $reset();
    } catch (error) {
      console.error('ERROR CREATE CABINET::: ', error);
    }
  };

  return {
    form,
    viewModal,

    openModal,
    createCabinet,
    changeSidePage,
  };
});
