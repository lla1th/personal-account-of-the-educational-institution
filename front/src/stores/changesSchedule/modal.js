import { ref } from 'vue';
import { defineStore } from 'pinia';
import { date } from 'quasar';
import Api from '../../utils/Api';

export const useModalChangeSchedule = defineStore('modalChangeSchedule', () => {
  const form = ref({
    id: '',
    date: new Date(),
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

  const viewModalSchedule = ref(false);

  /**
   * Очистка стейта, для модных и молодежных ( помогите )
   */
  const $reset = () => {
    viewModalSchedule.value = false;

    form.value = {
      id: '',
      date: new Date(),
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
      date: date.formatDate(form.value.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
    });

    viewModalSchedule.value = false;
    $reset();

    // return $q.notify({
    //   progress: true,
    //   message: 'Создание прошло успешно',
    //   color: 'primary',
    // });
  };

  return {
    /** Очистка */
    $reset,

    /** Хранилище */
    form,
    viewModalSchedule,
    information,

    saveSchedule,
    openModal,
  };
});
