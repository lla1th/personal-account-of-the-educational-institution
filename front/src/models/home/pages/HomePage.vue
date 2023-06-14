<script setup>
// imports
import { useHomeStore } from '../../../stores/home';
import { useMainStore } from '../../../stores/main';

const mainStore = useMainStore();

const store = useHomeStore();

</script>

<template>
  <q-page padding>
    <NightTitle
      title="Продуктивного рабочего дня!"
      content-top="Добрый день Марат."
      padding
    />
    <div class="q-mt-lg row items-start content-start q-gutter-lg">
      <NightCard
        v-for="(item, index) in store.cards"
        :key="`menu-card-${index}`"
        :title="item.title"
        @click="mainStore.routerPage(item.url)"
      >
        <template #sub-title>
          <div class="text-body2 text-dark">
            {{ item.subTitle }}
          </div>
        </template>
      </NightCard>
    </div>
  </q-page>
</template>
