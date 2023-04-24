<script setup>
import { useMainStore } from '../stores/main';

const store = useMainStore();
</script>

<template>
  <q-layout view="hHh lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Приложение</q-toolbar-title>
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

<style scoped>

</style>
