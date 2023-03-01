import { ref } from 'vue';
import { defineStore } from 'pinia';

/** entities */
import menuCards from '../entities/menuCards.js'

export const useHomeStore = defineStore('home', () => {
    const cards = ref(menuCards());

    return {
        cards,
    };
})