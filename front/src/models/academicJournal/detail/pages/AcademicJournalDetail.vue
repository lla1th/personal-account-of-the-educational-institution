<script setup>
import headers from '../entities/headers';
import students from '../../../../entities/students';

</script>

<template>
  <q-page padding>
    <NightTitle title="Выставить оценки студентами" />
    <div class="q-px-md q-py-lg q-my-md bg-grey-2 rounded-borders">
      <div class="row">
        hello
      </div>
    </div>

    <q-table
      :columns="headers()"
      :rows="students()"
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
            <div v-else>
              {{ props.row[head.name] }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
