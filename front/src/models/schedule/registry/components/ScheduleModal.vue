<script setup>
/* pinia */
import { storeToRefs } from 'pinia';
import { useModalChangeSchedule } from '../../../../stores/changesSchedule/modal';

/** config */
import { scheduleModalButtons } from '../config/buttons';

/** entities */
import { subGroups } from '../../../../entities/index';
import { well, pair } from '../../../../entities/mock';
import { useAuthStore } from '../../../../stores/auth';

const modalChangeSchedule = useModalChangeSchedule();
const auth = useAuthStore();

/* state */
const {
  form,
  viewModalSchedule,
  information,
  groups,
} = storeToRefs(modalChangeSchedule);

/* actions */
const { closeSchedule } = modalChangeSchedule;

// todo убить
modalChangeSchedule.getGroups();

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
  modalChangeSchedule.$patch({
    form: {
      ...modalChangeSchedule.form,
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
    :model-value="viewModalSchedule"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-close
    no-swipe-backdrop
    behavior="mobile"
    @update:model-value="closeSchedule"
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
              :model-value="form.date"
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
                      :model-value="form.date"
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
              bg-color="white"
              option-value="id"
              option-label="name"
              :options="well"
              label="Курс"
              :model-value="form.well"
              emit-value
              map-options
              @update:model-value="updateForm('well', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Группа"
              option-value="id"
              option-label="shortName"
              :options="groups"
              class="q-my-md"
              :model-value="form.group"
              emit-value
              map-options
              @update:model-value="updateForm('group', $event)"
            />
            <div class="row">
              <q-checkbox
                label="День самоподготовки"
                :model-value="form.selfTraining"
                @update:model-value="updateForm('selfTraining', $event)"
              />
              <q-checkbox
                label="Подгруппы"
                :model-value="form.subGroupsEnable"
                @update:model-value="updateForm('subGroupsEnable', $event)"
              />
            </div>
            <q-select
              v-if="form.subGroupsEnable"
              dense
              outlined
              bg-color="white"
              label="Подгруппа"
              class="q-my-md"
              :options="subGroups()"
              option-value="id"
              option-label="name"
              :model-value="form.subGroup"
              :disable="form.selfTraining"
              emit-value
              map-options
              @update:model-value="updateForm('subGroup', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Пара"
              class="q-my-md"
              option-value="id"
              option-label="name"
              :options="pair"
              :disable="form.selfTraining"
              :model-value="form.pair"
              emit-value
              map-options
              @update:model-value="updateForm('pair', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Предметы"
              class="q-my-md"
              option-value="id"
              option-label="name"
              :options="information.lessons"
              :disable="form.selfTraining"
              :model-value="form.lesson"
              emit-value
              map-options
              @update:model-value="updateForm('lesson', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Преподаватель"
              class="q-my-md"
              option-value="id"
              option-label="fullName"
              :options="auth.teacher"
              :disable="form.selfTraining"
              :model-value="form.teacher"
              emit-value
              map-options
              @update:model-value="updateForm('teacher', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Кабинет"
              class="q-my-md"
              option-value="id"
              option-label="shortName"
              :options="information.cabinets"
              :disable="form.selfTraining"
              :model-value="form.cabinet"
              emit-value
              map-options
              @update:model-value="updateForm('cabinet', $event)"
            />
          </slot>
        </div>
      </div>

      <div class="night-side-page__footer q-mt-lg">
        <slot name="footer">
          <div class="row q-gutter-md">
            <NightButton
              v-for="(button, index) in scheduleModalButtons()"
              :key="`button-modal-${button.label}-${index}`"
              :label="button.label"
              :size="button.size"
              :outline="button.outline"
              :loading="button.loading"
              @click="button.click()"
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
