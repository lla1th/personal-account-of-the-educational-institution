<script setup>
import headers from '../entities/headers';
import { useMainStore } from '../../../../stores/main';

const mainStore = useMainStore();
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Редактирование учебного расписания"
      has-button
      button-label="Создать расписание"
      @click="mainStore.routerPage('create')"
    />
    <q-table
      :columns="headers()"
      :rows="[]"
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
            {{ props.row[head.name] }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
