<script setup>
import headers from '../entities/headers';
import { useCalendarStore } from '../../../stores/calendar';

const store = useCalendarStore();

store.searchSchedule();
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Расписание"
    />
    <div class="q-pa-md q-my-lg bg-grey-2">
      <div class="row">
        <q-select
          class="col-2 q-mr-md"
          filled
          dense
          required
          :options="['ИП1-41','2','3']"
          use-input
          label="Выбрать группу"
          :model-value="store.search"
          @update:model-value="store.searchSchedule($event)"
        >
          <template #append>
            <q-icon
              v-if="store.search"
              name="close"
              @click.stop.prevent="store.searchSchedule(null)"
              class="cursor-pointer"
            />
          </template>
        </q-select>
        <q-select
          class="col-2 q-ml-md"
          filled
          dense
          :options="[1,2,3]"
          label="Преподователь"
        />
      </div>
    </div>
    <q-table
      v-if="store.search"
      :columns="headers()"
      :rows="store.elements"
      row-key="text"
      separator="cell"
      class="q-mt-lg"
      hide-bottom
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td
            v-for="(head, index) in props.cols"
            :key="`rows-${index}`"
          >
            <div v-if="head.name === 'lessons'">
              {{ props.row[head.name] }}
            </div>
            <div v-else>
              <div>
                {{ props.row[head.name]?.text }}
              </div>
              <div>
                {{ props.row[head.name]?.test }}
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
