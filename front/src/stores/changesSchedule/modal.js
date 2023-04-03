import { ref } from 'vue';
import { defineStore } from 'pinia';
import moment from 'moment';
import useQuasar from 'quasar/src/composables/use-quasar';

import { useRegistryChangeSchedule } from './registry';

export const useModalChangeSchedule = defineStore('modalChangeSchedule', () => {
  const form = ref({
    id: '',
    date: moment(new Date()).format('DD.MM.YYYY'),
    well: '',
    group: '',
    selfTraining: false,
    subGroupsEnable: false,
    subGroup: '',
    pair: '',
    lesson: '',
    teacher: '',
    cabinet: '',
  });

  const $q = useQuasar();

  const registryChangeSchedule = useRegistryChangeSchedule();

  const viewModalSchedule = ref(false);

  /**
   * Очистка стейта, для модных и молодежных ( помогите )
   */
  const $reset = () => {
    viewModalSchedule.value = false;

    form.value = {
      id: '',
      date: moment(new Date()).format('DD.MM.YYYY'),
      well: '',
      group: '',
      selfTraining: false,
      subGroup: '',
      pair: '',
      lesson: '',
      teacher: '',
      cabinet: '',
    };
  };

  const saveSchedule = () => {
    registryChangeSchedule.addNewScheduleItem(form.value);

    viewModalSchedule.value = false;

    $reset();

    return $q.notify({
      progress: true,
      message: 'Создание прошло успешно',
      color: 'primary',
    });
  };

  return {
    /** Очистка */
    $reset,

    /** Хранилище */
    form,
    viewModalSchedule,

    saveSchedule,
  };
});
