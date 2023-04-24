import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const authForm = ref({
    login: '',
    password: '',
  });

  return {
    authForm,
  };
});
