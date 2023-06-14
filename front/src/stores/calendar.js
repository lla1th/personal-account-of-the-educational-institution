import { ref } from 'vue';
import { defineStore } from 'pinia';
import moment from 'moment';
import Api from '../utils/Api';

import { useRegistryGroups } from './groups/registry';

export const useCalendarStore = defineStore('calendar', () => {
  const registryGroups = useRegistryGroups();

  const elements = ref([]);
  const search = ref(null);
  const groups = ref([]);
  const filter = ref({
    date: {
      to: moment().format('DD.MM.YYYY'),
      from: moment().format('DD.MM.YYYY'),
    },
    group: '',
  });

  const getGroups = async () => {
    const data = await registryGroups.getGroups();

    groups.value = data;
  };

  const filterChange = ({ key, content }) => {
    filter.value[key] = content;
  };

  const filterClear = () => {
    filter.value = {
      date: {
        to: moment().format('DD.MM.YYYY'),
        from: moment().format('DD.MM.YYYY'),
      },
    };
  };

  const getSchedule = async () => {
    const { data: { data } } = await Api.get('schedule/detail', {
      params: {
        dateTo: moment(filter.value.date.to, 'DD.MM.YYYY').toDate(),
        dateFrom: moment(filter.value.date.from, 'DD.MM.YYYY').toDate(),
        group: filter.value.group ? [filter.value.group] : [],
      },
    });

    elements.value = data;
  };

  return {
    elements,
    search,
    filter,
    groups,

    getSchedule,
    filterChange,
    filterClear,
    getGroups,
  };
});
