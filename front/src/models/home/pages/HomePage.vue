<script setup>
// imports
import { useRouter } from 'vue-router';
import { useHomeStore } from '../../../stores/home';

const store = useHomeStore();

const router = useRouter();

const routerPage = (url) => {
  router.push(url);
};
</script>

<template>
  <q-page
    padding
    class="q-pa-md row items-start content-start q-gutter-lg"
  >
    <NightCard
      v-for="(item, index) in store.cards"
      :key="`menu-card-${index}`"
      :title="item.title"
      @click="routerPage(item.url)"
    >
      <template #sub-title>
        <div class="text-subtitle2">
          {{ item.subTitle }}
        </div>
      </template>
    </NightCard>
  </q-page>
</template>
