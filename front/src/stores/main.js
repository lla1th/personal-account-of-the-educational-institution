import { ref } from 'vue';
import { defineStore } from 'pinia';

import menuNavigation from '../entities/menuNavigation';

import router from '../router/routers';

/**
 * Данный store соддержит общую информацию по проекту
 */
export const useMainStore = defineStore('main', () => {
  const menu = ref(menuNavigation());
  const miniMenu = ref(true);

  const chooseModal = (status = false) => {
    miniMenu.value = status;
  };

  const routerPage = (url) => {
    router.push(url);
  };

  return {
    // state
    menu,
    miniMenu,

    // actions
    chooseModal,
    routerPage,
  };
});
