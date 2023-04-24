<script setup>
import { useModalAcademicJournal } from '../../../../../stores/academicJournalTeacher/modal';

const modalAcademicJournal = useModalAcademicJournal();

/* props */
defineProps({
  title: {
    type: String,
    default: () => '',
    required: true,
  },
});

/**
 * Изменение значений в форме
 * @param key
 * @param content
 */
const updateForm = (key, content) => {
  modalAcademicJournal.$patch({
    form: {
      ...modalAcademicJournal.form,
      [key]: content,
    },
  });
};

</script>

<template>
  <q-drawer
    class="night-side-page"
    elevated
    :width="500"
    overlay
    :model-value="modalAcademicJournal.viewModalCreateGrade"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-close
    no-swipe-backdrop
    behavior="mobile"
    @update:model-value="modalAcademicJournal.$patch({ viewModalCreateGrade: false })"
  >
    <div class="night-side-page__container q-pa-xl column no-wrap justify-between">
      <div class="night-side-page__title q-pb-lg">
        <slot name="title">
          <NightTitle
            :title="title"
            subtitle
          />
        </slot>
      </div>

      <div class="night-side-page__content col">
        <div class="night-side-page__body">
          <slot name="body">
            <q-input
              dense
              outlined
              bg-color="white"
              label="Дата"
              mask="##.##.####"
              :model-value="modalAcademicJournal.form.date"
              class="q-mb-md"
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
                      :model-value="modalAcademicJournal.form.date"
                      label="close"
                      @update:model-value="updateForm('date', $event)"
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
              dense
              outlined
              use-input
              :options="modalAcademicJournal.dataInputs.well"
              option-label="name"
              option-value="id"
              label="Курс"
              class="q-mb-md"
              :model-value="modalAcademicJournal.form.well"
              @update:model-value="updateForm('well', $event)"
            />
            <q-select
              dense
              outlined
              use-input
              :options="modalAcademicJournal.dataInputs.group"
              option-label="name"
              option-value="id"
              label="Группа"
              class="q-mb-md"
              :model-value="modalAcademicJournal.form.group"
              @update:model-value="updateForm('group', $event)"
            />
            <q-select
              outlined
              use-input
              dense
              label="ФИО студента"
              :options="modalAcademicJournal.dataInputs.students"
              class="q-mb-md"
              option-value="id"
              option-label="fullName"
              :model-value="modalAcademicJournal.form.student"
              @update:model-value="updateForm('student', $event)"
            />
            <q-input
              outlined
              dense
              label="Оценка"
              class="q-mb-md"
              :model-value="modalAcademicJournal.form.grade"
              @update:model-value="updateForm('grade', $event)"
            />
            <q-input
              outlined
              dense
              label="Сообщение для студента"
              type="textarea"
              class="q-mb-md"
              :model-value="modalAcademicJournal.form.message"
              @update:model-value="updateForm('message', $event)"
            />
          </slot>
        </div>
      </div>

      <div class="night-side-page__footer q-mt-lg">
        <slot name="footer">
          <div class="row q-gutter-md">
            <q-btn
              unelevated
              size="md"
              color="primary"
              label="Создать"
              @click="modalAcademicJournal.createAssessment"
            />
            <q-btn
              outline
              size="md"
              color="primary"
              label="Отменить"
              @click="modalAcademicJournal.$patch({ viewModalCreateGrade: false })"
            />
          </div>
        </slot>
      </div>
    </div>
  </q-drawer>
</template>

<style lang="sass" scoped>
.night-side-page
  &__container
    height: 100%
  &__content
    height: 100%
    overflow-x: hidden
</style>
