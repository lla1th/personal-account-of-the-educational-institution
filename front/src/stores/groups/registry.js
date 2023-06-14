import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api';

import { useModalGroups } from './modal';

export const useRegistryGroups = defineStore('registryGroups', () => {
  /** pinia - Модальное окно раздела */
  const modalGroups = useModalGroups();

  /** state */
  const groups = ref([]);

  /** actions */
  /**
   * Открытие сайдпейджа
   * @returns {boolean}
   */
  const openModal = () => modalGroups.openModal();

  /**
   * Получение списка групп
   * @returns {Promise<void>}
   */
  const getGroups = async () => {
    const { data: { data } } = await Api.get('groups');

    groups.value = data;

    return data;
  };

  return {
    groups,

    openModal,
    getGroups,
  };
});
