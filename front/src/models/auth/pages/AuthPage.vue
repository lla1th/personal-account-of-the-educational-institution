<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../../../stores/auth';

const auth = useAuthStore();

const { authForm, loadingAuth } = storeToRefs(auth);

const password = ref(true);

onMounted(() => {
  auth.checkToken();
});

const visibilityPassword = () => {
  password.value = !password.value;
};

const updateForm = (key, content) => {
  auth.$patch({
    authForm: {
      ...auth.authForm,
      [key]: {
        value: content,
        valid: true,
      },
    },
  });
};

</script>

<template>
  <q-page
    class="auth flex content-stretch justify-end"
  >
    <div class="auth-content row justify-center content-center">
      <div class="auth-form">
        <NightTitle
          title="Вход"
          content-bottom="Личный кабинет для вас"
          color-title
        />
        <q-input
          outlined
          label="Логин"
          :model-value="authForm.login.value"
          :error="!authForm.login.valid"
          @update:model-value="updateForm('login', $event)"
        />
        <q-input
          outlined
          label="Пароль"
          :type="password ? 'password' : 'text'"
          class="q-mb-xs"
          :model-value="authForm.password.value"
          :error="!authForm.password.valid"
          @update:model-value="updateForm('password', $event)"
        >
          <template #append>
            <q-icon
              :name="password ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="visibilityPassword()"
            />
          </template>
        </q-input>

        <NightButton
          label="Войти"
          :loading="loadingAuth"
          class="auth-form__btn"
          @click="auth.sendAuth()"
        />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.auth
  background: url('../../../assets/image/auth.jpg')
  overflow: hidden
  &-content
    background: white
    box-shadow: 0 10px 80px rgba(0,0,0,.25)
    width: 45%
    padding: 0 40px
    position: relative
    z-index: 3
  &-form
    max-width: 400px
    flex: 1
    &__btn
      min-width: 135px
      padding: 16px

</style>
