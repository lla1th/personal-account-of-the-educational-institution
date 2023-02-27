import { ref } from 'vue';
import { defineStore } from 'pinia';

import menuNavigation from '../entities/menuNavigation.js';

/**
  Подсказка для меня, при работе с copmosition AAAAPI
  через ref - state
  через computed - getters
  через стрелочные функции - actions
    мутации мертвы :)
*/

export const useMainStore = defineStore('main', () => {
    const menu = ref(menuNavigation());
    const openDrawer = ref(true);


    const chooseModal = (status = false) => {
        openDrawer.value = status;
    }

    return {
        // state
        openDrawer,
        menu,

        // actions
        chooseModal,
    };
});
