<script setup>
import { onMounted, ref } from 'vue';
import { useMainStore } from '../stores/main';
import nowDate from '../help/nowDate';

const store = useMainStore();

const nowDateWatch = ref(nowDate('ru'));

onMounted(() => {
  setInterval(() => {
    nowDateWatch.value = nowDate('ru');
  }, 1000);
});

</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-header
      class="bg-white q-py-sm"
    >
      <q-toolbar class="bg-white">
        <div class="text-black">
          Дата: {{ nowDateWatch }}
        </div>
        <q-space />
        <q-btn
          class="btn--no-hover"
          flat
          dense
          :ripple="false"
          icon="logout"
          color="dark"
        />
      </q-toolbar>
    </q-header>
    <NightDrawer
      :mini="!store.miniMenu"
      :items="store.menu"
      @size-sidebar="store.chooseModal(!store.miniMenu)"
    />
    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="sass">
:deep(.q-btn.btn--no-hover .q-focus-helper)
  display: none
</style>
