<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import headers from '../entities/headers';
import CabinetCreateSidePage from '../components/LessonsCreateSidePage.vue';
import { useRegistryLessons } from '../../../stores/lessons/registry';

const registryLessons = useRegistryLessons();

const { lessons } = storeToRefs(registryLessons);

onMounted(async () => {
  await registryLessons.getList();
});

</script>

<template>
  <q-page padding>
    <NightTitle
      title="Предметы"
      has-button
      button-label="Добавить новый предмет"
      class="q-mb-lg"
      @ButtonClick="registryLessons.openModal()"
    />
    <q-table
      :columns="headers()"
      :rows="lessons"
      row-key="label"
      separator="cell"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td
            v-for="(head, index) in props.cols"
            :key="`rows-${index}`"
          >
            <div
              v-if="head.name === 'name'"
            >
              {{ props.row[head.name] }}
            </div>
            <div
              v-if="head.name === 'code'"
            >
              {{ props.row[head.name] }}
            </div>
            <div
              v-if="head.name === 'createdAt'"
            >
              {{ props.row[head.name] }}
            </div>
            <div
              v-if="head.name === 'actions'"
            >
              изменить
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <CabinetCreateSidePage />
  </q-page>
</template>
