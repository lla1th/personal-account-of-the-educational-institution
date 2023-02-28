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
    const miniMenu = ref(true);


    const chooseModal = (status = false) => {
        miniMenu.value = status;
    }

    return {
        // state
        menu,
        miniMenu,

        // actions
        chooseModal,
    };
});
