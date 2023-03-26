import { ref } from 'vue';
import { defineStore } from 'pinia';
import moment from 'moment';

export const useRegistryChangeSchedule = defineStore('registryChangeSchedule', () => {
  const form = ref({
    date: moment(new Date()).format('DD-MM-YYYY'),
    well: '',
    group: '',
    pair: '',
    lesson: '',
    teacher: '',
    cabinet: '',
  });

  /**
     * Метод по обновлению состояние state в pinia
     * @param state
     * @param content
     * @param key
     * @constructor
     */
  const UPDATE_FORM = ({ content, key }) => {
    form.value = !key ? content : { ...form.value, [key]: content };
  };

  return {
    form,
    UPDATE_FORM,
  };
});
