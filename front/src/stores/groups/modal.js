import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api';

import { useRegistryGroups } from './registry';

export const useModalGroups = defineStore('modalCreateGroups', () => {
  /** Получение store с реестра раздела */
  const registryGroups = useRegistryGroups();

  /** state */
  /**
   * Форма создания группы
   * @type {code: string, name: string, id: null | string }
   */
  const form = ref({
    id: null,
    fullName: '',
    shortName: '',
  });

  /**
   * Открыта ли модального окно
   * @type Ref<UnwrapRef<boolean>>
   */
  const viewModal = ref(false);

  /**
   * Очистка state данного store
   */
  const $reset = () => {
    form.value = {
      id: null,
      fullName: '',
      shortName: '',
    };

    viewModal.value = false;
  };

  /**
   * Открытие/закрытие модального окна
   * @returns {boolean}
   */
  // eslint-disable-next-line no-return-assign
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
     * Создания группы
     */
  const createGroups = async () => {
    try {
      await Api.post('groups', {
        ...form.value,
      });

      await registryGroups.getGroups();
      $reset();
    } catch (error) {
      console.error('ERROR CREATE GROUPS::: ', error);
    }
  };

  return {
    form,
    viewModal,

    openModal,
    createGroups,
    changeSidePage,
  };
});
