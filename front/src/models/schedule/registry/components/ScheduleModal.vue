<script setup>
/** *****************************************************************
 * Заметка*                                                        *
 *                                                                 *
 * Данный компоненты должен быть вынесен в отдельный компонент!    *
 * намименование: 'NightSidePage'                                  *
 * слоты: как указаны ниже, НО с другим котентом
 *
 * 28.03.2023 - да черт его знает, я больше не понимаю нихрена
 *
 *                                                                 *
 ****************************************************************** */
/* pinia */
import { useModalChangeSchedule } from '../../../../stores/changesSchedule/modal';

/** entities */
import { subGroups } from '../../../../entities/index';
import {
  well, pair, lesson, teacher, cabinet, group,
} from '../../../../entities/mock';

const modalChangeSchedule = useModalChangeSchedule();

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
    :model-value="modalChangeSchedule.viewModalSchedule"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-close
    no-swipe-backdrop
    behavior="mobile"
    @update:model-value="modalChangeSchedule.$patch({ viewModalSchedule: false })"
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
              :model-value="modalChangeSchedule.form.date"
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
                      :model-value="modalChangeSchedule.form.date"
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
              :model-value="modalChangeSchedule.form.well"
              @update:model-value="updateForm('well', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Группа"
              option-value="id"
              option-label="name"
              :options="group"
              class="q-my-md"
              :model-value="modalChangeSchedule.form.group"
              @update:model-value="updateForm('group', $event)"
            />
            <div class="row">
              <q-checkbox
                label="День самоподготовки"
                :model-value="modalChangeSchedule.form.selfTraining"
                @update:model-value="updateForm('selfTraining', $event)"
              />
              <q-checkbox
                label="Подгруппы"
                :model-value="modalChangeSchedule.form.subGroupsEnable"
                @update:model-value="updateForm('subGroupsEnable', $event)"
              />
            </div>
            <q-select
              v-if="modalChangeSchedule.form.subGroupsEnable"
              dense
              outlined
              bg-color="white"
              label="Подгруппа"
              class="q-my-md"
              :options="subGroups()"
              option-value="id"
              option-label="name"
              :model-value="modalChangeSchedule.form.subGroup"
              :disable="modalChangeSchedule.form.selfTraining"
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
              :disable="modalChangeSchedule.form.selfTraining"
              :model-value="modalChangeSchedule.form.pair"
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
              :options="lesson"
              :disable="modalChangeSchedule.form.selfTraining"
              :model-value="modalChangeSchedule.form.lesson"
              @update:model-value="updateForm('lesson', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Преподаватель"
              class="q-my-md"
              option-value="id"
              option-label="name"
              :options="teacher"
              :disable="modalChangeSchedule.form.selfTraining"
              :model-value="modalChangeSchedule.form.teacher"
              @update:model-value="updateForm('teacher', $event)"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Кабинет"
              class="q-my-md"
              option-value="id"
              option-label="name"
              :options="cabinet"
              :disable="modalChangeSchedule.form.selfTraining"
              :model-value="modalChangeSchedule.form.cabinet"
              @update:model-value="updateForm('cabinet', $event)"
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
              @click="modalChangeSchedule.saveSchedule()"
            />
            <q-btn
              outline
              size="md"
              color="primary"
              label="Отменить"
              @click="modalChangeSchedule.$patch({ viewModalSchedule: false })"
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