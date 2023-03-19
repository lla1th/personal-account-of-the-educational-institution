import { ref } from 'vue';
import { defineStore } from 'pinia';

import menuNavigation from '../entities/menuNavigation';

/**
 * Данный store соддержит общую информацию по проекту
 */
export const useMainStore = defineStore('main', () => {
  const menu = ref(menuNavigation());
  const miniMenu = ref(true);

  const chooseModal = (status = false) => {
    miniMenu.value = status;
  };

  return {
    // state
    menu,
    miniMenu,

    // actions
    chooseModal,
  };
});
