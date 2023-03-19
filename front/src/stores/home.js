import { ref } from 'vue';
import { defineStore } from 'pinia';

/** entities */
import menuCards from '../entities/menuCards';

/**
 * store домашней страницы, в нем содержится инфомрация о карточка
 */
export const useHomeStore = defineStore('home', () => {
  const cards = ref(menuCards());

  return {
    cards,
  };
});
