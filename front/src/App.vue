<script setup>
import { useMainStore } from './stores/main.js';

const store = useMainStore();
</script>

<template>
  <q-layout>
  <q-header elevated>
    <q-toolbar>
        <q-btn flat round dense icon="menu" @click='store.chooseModal(!store.openDrawer)' />
        <q-toolbar-title>Header</q-toolbar-title>
    </q-toolbar>
  </q-header>
  <NightDrawer
    :open="store.openDrawer"
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
