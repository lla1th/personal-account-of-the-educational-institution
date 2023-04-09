<script setup>
import { useDetailAcademicJournal } from '../../../../stores/academicJournal/detail';
import { useModalAcademicJournal } from '../../../../stores/academicJournal/modal';

import AcademicJournalModal from '../components/modal/AcademicJournalModal.vue';

/** entities */
import headers from '../entities/headers';
/** help config */
import { formatDate } from '../../../../help/index';

const detailAcademicJournal = useDetailAcademicJournal();

const modalAcademicJournal = useModalAcademicJournal();
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Выставить оценки студентам"
      has-button
      button-label="Добавить оценку"
      @ButtonClick="modalAcademicJournal.$patch({ viewModalCreateGrade: true })"
    />
    <div class="q-px-md q-py-lg q-my-md bg-grey-2 rounded-borders">
      <div class="row q-gutter-md">
        <q-input
          filled
          dense
          label="ФИО студента"
        />
        <q-select
          filled
          dense
          required
          use-input
          :options="[]"
          label="Группа"
          option-value="id"
          option-label="name"
        />
      </div>
    </div>

    <q-table
      :columns="headers()"
      :rows="detailAcademicJournal.items"
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
              {{ props.row[head.name] }}
            </div>
            <div
              v-else-if="head.name === 'date'"
            >
              {{ formatDate(props.row[head.name]) }}
            </div>
            <div v-else>
              {{ props.row[head.name] }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <AcademicJournalModal
      title="Создать расписание"
    />
  </q-page>
</template>
