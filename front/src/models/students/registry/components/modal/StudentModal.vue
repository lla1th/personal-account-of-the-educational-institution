<script setup>
import { useModalStudents } from '../../../../../stores/students/modal';

const modalStudents = useModalStudents();

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
  modalStudents.$patch({
    form: {
      ...modalStudents.form,
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
    :model-value="modalStudents.viewModalCreateGrade"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-close
    no-swipe-backdrop
    behavior="mobile"
    @update:model-value="modalStudents.$patch({ viewModalCreateGrade: false })"
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
              outlined
              dense
              label="Имя студента"
              class="q-mb-md"
              :model-value="modalStudents.form.name"
              @update:model-value="updateForm('name', $event)"
            />
            <q-input
              outlined
              dense
              label="Возраст"
              class="q-mb-md"
              :model-value="modalStudents.form.age"
              @update:model-value="updateForm('age', $event)"
            />
            <q-input
              outlined
              dense
              label="Оценка"
              class="q-mb-md"
              :model-value="modalStudents.form.grade"
              @update:model-value="updateForm('grade', $event)"
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
              :label="!modalStudents.form.id ? 'Создать' : 'Обновить'"
              @click="modalStudents.createAssessment"
            />
            <q-btn
              outline
              size="md"
              color="primary"
              label="Отменить"
              @click="modalStudents.cancelModal"
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
