import { ref } from 'vue';
import { defineStore } from 'pinia';

/**
  Подсказка для меня, при работе с copmosition AAAAPI
  через ref - state
  через computed - getters
  через стрелочные функции - actions
    мутации мертвы :)
*/

export const useMainStore = defineStore('main', () => {
    const openDrawer = ref(true);


    const chooseModal = (status = false) => {
        openDrawer.value = status;
    }

    return { openDrawer, chooseModal };
});
