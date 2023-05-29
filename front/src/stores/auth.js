import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../utils/Api';

export const useAuthStore = defineStore('auth', () => {
  const authForm = ref({
    login: '',
    password: '',
  });

  const sendAuth = async () => {
    await Api.post('auth/login', {
      username: authForm.value.login,
      password: authForm.value.password,
    });
  };

  const checkToken = async () => {
    const { data } = await Api.get('auth/check');
    console.log(data);
  };

  return {
    authForm,

    checkToken,
    sendAuth,
  };
});
