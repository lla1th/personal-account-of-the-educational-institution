<script setup>
import { onMounted } from 'vue';
import { useRegistryStudents } from '../../../../stores/students/registry';

import headers from '../entities/headers';
import StudentModal from '../components/modal/StudentModal.vue';
// eslint-disable-next-line import/extensions
import { useModalStudents } from '@/stores/students/modal.js';
import NightButton from "@/components/ui/NightButton.vue";

const registryStudents = useRegistryStudents();

const modalAcademicJournal = useModalStudents();

onMounted(async () => {
  await registryStudents.getList();
});
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Студенты"
      has-button
      button-label="Добавить студента"
      @button-click="modalAcademicJournal.$patch({ viewModalCreateGrade: true })"
    />
    <q-table
      :columns="headers()"
      :rows="registryStudents.students"
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
            <div>
              {{ props.row[head.name] }}
            </div>
            <div v-if="head.name === 'actions'">
              <NightButton
                  label="Изменить"
                  class="q-mr-lg"
                  @click="modalAcademicJournal.openUpdateModal(props.row)"
              />
              <NightButton
                  label="Удалить"
                @click="registryStudents.deleteStudent(props.row.id)"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <StudentModal
      title="Создать студенты"
    />
  </q-page>
</template>

<style scoped lang="sass">

</style>
