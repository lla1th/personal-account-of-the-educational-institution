<script setup>
import headers from '../entities/headers';
/** todo Удалить */
import mockDataTable from '../entities/mockDataTable';

</script>

<template>
  <q-page padding>
    <NightTitle
      title="Расписание"
    />
    <q-table
      :columns="headers()"
      :rows="mockDataTable()"
      row-key="text"
      separator="cell"
      class="q-mt-lg"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td
            v-for="(head, index) in headers()"
            :key="`rows-${index}`"
          >
            <div v-if="head.name === 'lessons'">
              {{ props.row[head.name] }}
            </div>
            <div />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
