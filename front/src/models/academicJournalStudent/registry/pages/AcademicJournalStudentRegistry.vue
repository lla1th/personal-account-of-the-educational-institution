<script setup>
import { useRegistryAcademicJournalStudent } from '../../../../stores/academicJournalStudent/registry';
import { useMainStore } from '../../../../stores/main';

const mainStore = useMainStore();
const registryAcademicJournalStudent = useRegistryAcademicJournalStudent();

</script>

<template>
  <q-page padding>
    <NightTitle title="Выберите предмет" />
    <div class="q-pa-md row items-start content-start q-gutter-lg">
      <NightCard
        v-for="(item, index) in registryAcademicJournalStudent.menuListStudySubjects"
        :key="`menu-card-${index}`"
        :title="item.title"
        @click="mainStore.routerPage(item.url)"
      >
        <template #sub-title>
          <div class="text-subtitle2">
            {{ item.subTitle }}
          </div>
        </template>
      </NightCard>
    </div>
  </q-page>
</template>

<style scoped>

</style>
