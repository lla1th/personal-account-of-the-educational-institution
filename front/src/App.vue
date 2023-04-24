<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta.layout || 'MainPageLayout');
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
