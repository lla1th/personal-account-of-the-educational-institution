<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useAuthStore } from '../../../stores/auth';

const auth = useAuthStore();

const { authForm } = storeToRefs(auth);

onMounted(() => {
  auth.checkToken();
});

const updateForm = (key, content) => {
  auth.$patch({
    authForm: {
      ...auth.authForm,
      [key]: content,
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
        <NightTitle title="Вход" />
        <q-input
          filled
          label="Логин"
          :model-value="authForm.login"
          @update:model-value="updateForm('login', $event)"
          class="q-mb-md"
        />
        <q-input
          filled
          label="Пароль"
          :type="'password'"
          :model-value="authForm.password"
          class="q-mb-lg"
          @update:model-value="updateForm('password', $event)"
        />
        <q-btn
          label="Войти"
          class="auth-form__btn"
          push
          @click="auth.sendAuth()"
        />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.auth
  background: $primary
  overflow: hidden
  &-content
    background: white
    width: 40%
    position: relative
    z-index: 3
    &::after
      content: ''
      background: white
      width: 50%
      z-index: -1
      height: 120vh
      display: block
      position: absolute
      transform: rotate(12.5deg) translateX(-8rem)
      left: 0
      box-shadow: -45px 50px 40px rgba(0,0,0,.15)
  &-form
    max-width: 400px
    flex: 1
    &__btn
      min-width: 155px
      padding: 16px

</style>
