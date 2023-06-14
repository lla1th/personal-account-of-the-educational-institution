import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../utils/Api';
import router from '../router/routers';

export const useAuthStore = defineStore('auth', () => {
  const authForm = ref({
    login: {
      value: '',
      valid: true,
    },
    password: {
      value: '',
      valid: true,
    },
  });

  const users = ref([]);

  const loadingAuth = ref(false);

  const checkValid = () => {
    const keysAuth = Object.keys(authForm.value);

    keysAuth.forEach((key) => {
      authForm.value[key].valid = !!authForm.value[key].value;
    });

    return keysAuth.some((key) => keysAuth.value[key].valid);
  };

  const sendAuth = async () => {
    try {
      loadingAuth.value = true;
      if (checkValid()) {
        return;
      }
      await Api.post('auth/login', {
        username: authForm.value.login,
        password: authForm.value.password,
      });

      await router.push('/');
    } catch (error) {
      authForm.value = {
        login: {
          value: '',
          valid: false,
        },
        password: {
          value: '',
          valid: false,
        },
      };

      console.error('ERROR LOGIN:::', error);
    } finally {
      loadingAuth.value = false;
    }
  };

  const checkToken = async () => {
    try {
      await Api.get('auth/check');
    } catch (error) {
      // await router.push('/auth');
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
    loadingAuth,
    users,

    teacher,

    checkToken,
    sendAuth,
    getUsers,
  };
});
