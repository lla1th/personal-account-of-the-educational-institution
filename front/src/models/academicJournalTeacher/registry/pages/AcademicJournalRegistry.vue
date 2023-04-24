<script setup>
import { useRegistryAcademicJournalTeacher } from '../../../../stores/academicJournalTeacher/registry';
import { useMainStore } from '../../../../stores/main';

const mainStore = useMainStore();

const registryAcademicJournalTeacher = useRegistryAcademicJournalTeacher();
</script>

<template>
  <q-page padding>
    <NightTitle title="Выберите предмет" />
    <div class="q-pa-md row items-start content-start q-gutter-lg">
      <NightCard
        v-for="(item, index) in registryAcademicJournalTeacher.menuListStudySubjects"
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
