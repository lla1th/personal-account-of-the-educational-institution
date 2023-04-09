<script setup>
import { useRegistryChangeSchedule } from '../../../../stores/changesSchedule/registry';
import { useModalChangeSchedule } from '../../../../stores/changesSchedule/modal';

/* Components */
import ScheduleModal from '../components/ScheduleModal.vue';

/* Entities */
import headers from '../entities/headers';

/** Хранилище раздела */
const registryChangeSchedule = useRegistryChangeSchedule();

/** Хранилище модального окна */
const modalChangeSchedule = useModalChangeSchedule();
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Редактирование учебного расписания"
      has-button
      button-label="Создать расписание"
      @ButtonClick="modalChangeSchedule.$patch({ viewModalSchedule: true })"
    />
    <q-table
      :columns="headers()"
      :rows="registryChangeSchedule.elements"
      row-key="label"
      separator="cell"
      class="q-mt-lg"
    >
      <template #header="props">
        <q-tr :props="props">
          <q-th
            v-for="(head, index) in props.cols"
            :key="`header-table--${head.name}-${index}`"
            :width="head.width"
            class="text-left"
          >
            {{ head.label }}
          </q-th>
        </q-tr>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td
            v-for="(head, index) in props.cols"
            :key="`rows-${index}`"
          >
            <div
              v-if="head.name === 'group'"
              class="column"
            >
              {{ props.row[head.name]?.name }}
              <span>
                {{ props.row.subGroup?.name }}
              </span>
            </div>
            <div v-else-if="head.name === 'date'">
              {{ props.row[head.name] }}
            </div>
            <div v-else>
              {{ props.row[head.name]?.name }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <ScheduleModal
      title="Создать расписание"
    />
  </q-page>
</template>
