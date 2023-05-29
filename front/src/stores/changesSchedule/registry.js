import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api.js';

export const useRegistryChangeSchedule = defineStore('registryChangeSchedule', () => {
  const elements = ref([]);

  const addNewScheduleItem = (item) => {
    elements.value = [...elements.value, { ...item, id: Math.random() }];
  };

  const getSchedules = async () => {
    const { data: { data } } = await Api.get('schedule');
    console.log(data, '<<<<<<<<');
    elements.value = data;
  };

  return {
    elements,

    getSchedules,
    addNewScheduleItem,
  };
});
