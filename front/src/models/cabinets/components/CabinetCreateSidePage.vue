<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { buttonsSidePage } from '../configs/buttons';
import { useModalCreateCabinet } from '../../../stores/cabinets/modal';

// store
const modalCreateCabinet = useModalCreateCabinet();

const { form, viewModal } = storeToRefs(modalCreateCabinet);

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
        label="Полное название кабинета"
        :model-value="form.fullName"
        @update:model-value="modalCreateCabinet.changeSidePage({ content: $event, key: 'fullName' })"
      />
      <q-input
        outlined
        label="Номер кабинета"
        :model-value="form.shortName"
        @update:model-value="modalCreateCabinet.changeSidePage({ content: $event, key: 'shortName' })"
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
