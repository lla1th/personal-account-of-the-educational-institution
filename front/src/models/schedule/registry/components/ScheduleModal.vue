<script setup>
/**
 * Заметка*
 *
 * Данный компоненты должен быть вынесен в отдельный компонент!
 * намименование: 'NightSidePage'
 * слоты: как указаны ниже, НО с другим котентом
 */
/* pinia */
import { useRegistryChangeSchedule } from '../../../../stores/changesSchedule/modal';

const registryChangeSchedule = useRegistryChangeSchedule();

/* props */
defineProps({
  title: {
    type: String,
    default: () => '',
    required: true,
  },
});

</script>

<template>
  <q-drawer
    class="night-side-page"
    elevated
    :width="500"
    overlay
    :model-value="true"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-backdrop
    behavior="mobile"
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
              :rules="['date']"
              :model-value="registryChangeSchedule.form.date"
            >
              <template #append>
                <q-icon
                  name="event"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      mask="DD-MM-YYYY"
                      :model-value="registryChangeSchedule.form.date"
                      @update:model-value="registryChangeSchedule
                        .UPDATE_FORM({ content: $event, key: 'date' })"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
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
              label="Курс"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Группа"
              class="q-my-md"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Пара"
              class="q-my-md"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Предметы"
              class="q-my-md"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Преподаватель"
              class="q-my-md"
            />
            <q-select
              dense
              outlined
              bg-color="white"
              label="Кабинет"
              class="q-my-md"
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
            />
            <q-btn
              outline
              size="md"
              color="primary"
              label="Отменить"
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
