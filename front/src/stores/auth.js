import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../utils/Api';
import router from '../router/routers';

export const useAuthStore = defineStore('auth', () => {
  const authForm = ref({
    login: '',
    password: '',
  });

  const users = ref([]);

  const sendAuth = async () => {
    try {
      await Api.post('auth/login', {
        username: authForm.value.login,
        password: authForm.value.password,
      });

      await router.push('/');
    } catch (error) {
      console.error('ERROR LOGIN:::', error);
    }
  };

  const checkToken = async () => {
    try {
      await Api.get('auth/check');
    } catch (error) {
      await router.push('/auth');
      console.error('ERROR TOKEN::: ', error);
    }
  };

  const getUsers = async () => {
    const { data: { data } } = await Api.get('auth/users');
    users.value = data;
  };

  const teacher = computed(() => users.value
    .filter((item) => item.roles.some((el) => el === 'Преподаватель')));

  return {
    authForm,
    users,

    teacher,

    checkToken,
    sendAuth,
    getUsers,
  };
});
