<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { buttonsSidePage } from '../configs/buttons';
import { useModalLessons } from '../../../stores/lessons/modal';

// store
const modalLessons = useModalLessons();

const { form, viewModal } = storeToRefs(modalLessons);

const title = computed(() => 'Добавить кабинет');
</script>

<template>
  <NightSidePage
    :modal-value="viewModal"
    :title="title"
  >
    <template #body>
      <q-input
        outlined
        class="q-mb-md"
        label="Название Предмета"
        :model-value="form.name"
        @update:model-value="modalLessons.changeSidePage({ content: $event, key: 'name' })"
      />
      <q-input
        outlined
        label="Код предмета"
        :model-value="form.code"
        @update:model-value="modalLessons.changeSidePage({ content: $event, key: 'code' })"
      />
    </template>
    <template #footer>
      <div class="row q-gutter-md">
        <q-btn
          v-for="(btn, index) in buttonsSidePage()"
          :key="`btn-night-side-page--${index}`"
          color="primary"
          v-bind="btn.props"
          @click="btn.event.click()"
        />
      </div>
    </template>
  </NightSidePage>
</template>
