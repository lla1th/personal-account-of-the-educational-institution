<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import headers from '../entities/headers';
import { useRegistryGroups } from '../../../stores/groups/registry';
import GroupsCreateSidePage from '../components/GroupsCreateSidePage.vue';

const registryGroups = useRegistryGroups();

const { groups } = storeToRefs(registryGroups);

onMounted(async () => {
  await registryGroups.getGroups();
});

</script>

<template>
  <q-page padding>
    <NightTitle
      title="Группы"
      has-button
      button-label="Добавить новую группу"
      class="q-mb-lg"
      @ButtonClick="registryGroups.openModal()"
    />
    <q-table
      :columns="headers()"
      :rows="groups"
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

    <GroupsCreateSidePage />
  </q-page>
</template>
