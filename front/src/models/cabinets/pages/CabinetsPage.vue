<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import headers from '../entities/headers';
import CabinetCreateSidePage from '../components/CabinetCreateSidePage.vue';
import { useRegistryCabinet } from '../../../stores/cabinets/registry';

const registryCabinet = useRegistryCabinet();

const { cabinets } = storeToRefs(registryCabinet);

onMounted(async () => {
  await registryCabinet.getList();
});

</script>

<template>
  <q-page padding>
    <NightTitle
      title="Кабинеты"
      has-button
      button-label="Добавить кабинет"
      class="q-mb-lg"
      @ButtonClick="registryCabinet.openModal()"
    />
    <q-table
      :columns="headers()"
      :rows="cabinets"
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
              v-if="head.name === 'fullName'"
            >
              {{ props.row[head.name] }}
            </div>
            <div
              v-if="head.name === 'shortName'"
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
