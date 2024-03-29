<script setup>
import { onMounted } from 'vue';
import { useRegistryChangeSchedule } from '../../../../stores/changesSchedule/registry';
import { useModalChangeSchedule } from '../../../../stores/changesSchedule/modal';
import { useAuthStore } from '../../../../stores/auth';

/* Components */
import ScheduleModal from '../components/ScheduleModal.vue';

/* Entities */
import headers from '../entities/headers';

/** Хранилище раздела */
const registryChangeSchedule = useRegistryChangeSchedule();

/** Хранилище модального окна */
const modalChangeSchedule = useModalChangeSchedule();
const auth = useAuthStore();

const user = (item) => auth.teacher.find((el) => el.id === item.teacherId)?.fullName || '';

onMounted(() => {
  registryChangeSchedule.getSchedules();
});
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Редактирование учебного расписания"
      has-button
      button-label="Создать расписание"
      @ButtonClick="modalChangeSchedule.openModal()"
    />
    <q-table
      :columns="headers()"
      :rows="registryChangeSchedule.elements"
      :pagination="{
        rowsPerPage: 10,
      }"
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
              v-if="head.name === 'groups'"
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
            <div v-else-if="head.name === 'pair'">
              {{ props.row.pair }} Пара
            </div>
            <div v-else-if="head.name === 'well'">
              {{ props.row.well }}
            </div>
            <div v-else-if="head.name === 'createdAt'">
              {{ props.row[head.name] }}
            </div>
            <div v-else-if="head.name === 'teacher'">
              {{ user(props.row) }}
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
