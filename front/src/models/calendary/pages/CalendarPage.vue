<script setup>
import { storeToRefs } from 'pinia';
import headers from '../entities/headers';
import { useCalendarStore } from '../../../stores/calendar';

const store = useCalendarStore();

const { elements, groups, filter } = storeToRefs(store);

store.getGroups();
</script>

<template>
  <q-page padding>
    <NightTitle
      title="Расписание"
    />
    <div class="q-pa-md q-my-lg bg-grey-1">
      <div class="row justify-between">
        <div class="row align-center">
          <q-input
            class="col q-mr-lg"
            dense
            outlined
            bg-color="white"
            :input-style="{ width: '380px' }"
            label="Дата"
            mask="##.##.#### - ##.##.####"
            :model-value="`${filter.date.from} - ${filter.date.to}`"
          >
            <template #append>
              <q-icon
                name="event"
                class="cursor-pointer q-my-md"
              >
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    mask="DD.MM.YYYY"
                    :model-value="filter.date"
                    label="close"
                    range
                    @update:model-value="store.filterChange({ key: 'date', content: $event })"
                  >
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Закрыть"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-select
            class="col q-mr-md"
            dense
            outlined
            bg-color="white"
            option-value="id"
            option-label="shortName"
            :options="groups"
            emit-value
            map-options
            label="Выбрать группу"
            :model-value="filter.group"
            @update:model-value="store.filterChange({ key: 'group', content: $event })"
          />
        </div>
        <q-btn
          v-close-popup
          label="Применить"
          color="primary"
          flat
          @click="store.getSchedule()"
        />
      </div>
    </div>
    <div
      v-show="elements.length > 0"
      v-for="(element, index) in elements"
      :key="index"
      class="q-mt-lg"
    >
      <h5 class="text-h5 q-mb-md">
        {{ element.date }}
      </h5>
      <q-separator />
      <q-table
        :columns="headers()"
        :rows="element.content"
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
              <div v-if="head.name === 'pair'">
                Пара {{ props.row[head.name] }}
              </div>
              <div v-if="head.name === 'well'">
                Курс {{ props.row[head.name] }}
              </div>
              <div v-else-if="head.name === 'groups'">
                {{ props.row[head.name]?.name }}
              </div>
              <div v-else-if="head.name === 'lesson'">
                {{ props.row[head.name]?.name }}
              </div>
              <div v-else-if="head.name === 'cabinet'">
                {{ props.row[head.name]?.name }}
              </div>
              <div v-else-if="head.name === 'lesson'">
                {{ props.row[head.name]?.name }}
              </div>
              <div v-else-if="head.name === 'teacher'">
                {{ props.row[head.name]?.name }}
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
