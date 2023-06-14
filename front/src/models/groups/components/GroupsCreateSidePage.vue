<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { buttonsSidePage } from '../configs/buttons';
import { useModalGroups } from '../../../stores/groups/modal';

// store
const modalGroups = useModalGroups();

const { form, viewModal } = storeToRefs(modalGroups);

const title = computed(() => 'Добавить группу');
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
        label="Название специальности"
        :model-value="form.name"
        @update:model-value="modalGroups.changeSidePage({ content: $event, key: 'name' })"
      />
      <q-input
        outlined
        label="Номер группы"
        :model-value="form.code"
        @update:model-value="modalGroups.changeSidePage({ content: $event, key: 'code' })"
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
