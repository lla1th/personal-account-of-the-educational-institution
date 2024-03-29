import { ref } from 'vue';
import { defineStore } from 'pinia';
import moment from 'moment';
import Api from '../../utils/Api';
import { useRegistryChangeSchedule } from './registry';

export const useModalChangeSchedule = defineStore('modalChangeSchedule', () => {
  const registryChangeSchedule = useRegistryChangeSchedule();

  const form = ref({
    id: '',
    date: moment().format('DD.MM.YYYY'),
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

  const information = ref({
    cabinets: [],
    lessons: [],
  });

  const groups = ref([]);

  const viewModalSchedule = ref(false);

  /**
   * Очистка стейта, для модных и молодежных ( помогите )
   */
  const $reset = () => {
    viewModalSchedule.value = false;

    form.value = {
      id: '',
      date: moment().format('DD.MM.YYYY'),
      well: '',
      group: '',
      selfTraining: false,
      subGroup: '',
      pair: '',
      lesson: '',
      teacher: '',
      cabinet: '',
    };

    information.value = {
      cabinets: [],
      lessons: [],
    };
  };

  const openModal = async () => {
    viewModalSchedule.value = !viewModalSchedule.value;

    const { data: { data: { cabinets, lessons } } } = await Api.get('information');

    information.value = {
      cabinets,
      lessons,
    };
  };

  const saveSchedule = async () => {
    await Api.post('schedule', {
      ...form.value,
      date: moment(form.value.date, 'DD.MM.YYYY').toDate(),
    });

    await registryChangeSchedule.getSchedules();
    viewModalSchedule.value = false;
    $reset();

    // return $q.notify({
    //   progress: true,
    //   message: 'Создание прошло успешно',
    //   color: 'primary',
    // });
  };

  const closeSchedule = () => {
    viewModalSchedule.value = false;
  };

  const getGroups = async () => {
    const { data: { data } } = await Api.get('groups');

    groups.value = data;
  };

  return {
    /** Очистка */
    $reset,

    /** Хранилище */
    form,
    viewModalSchedule,
    information,
    groups,

    saveSchedule,
    closeSchedule,
    getGroups,
    openModal,
  };
});
