<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore();
auth.checkToken();
auth.getUsers();

const route = useRoute();

const layout = computed(() => route.meta.layout || 'MainPageLayout');

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
