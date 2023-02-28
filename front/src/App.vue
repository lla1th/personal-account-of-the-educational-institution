<script setup>
import { useMainStore } from './stores/main.js';

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
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
