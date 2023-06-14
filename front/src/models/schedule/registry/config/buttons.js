import { storeToRefs } from 'pinia';
import { useModalChangeSchedule } from '../../../../stores/changesSchedule/modal';

export const scheduleModalButtons = () => {
  const modalChangeSchedule = useModalChangeSchedule();

  const { loadingCreateSchedule } = storeToRefs(modalChangeSchedule);

  return [
    {
      size: 'md',
      label: 'Создать',
      loading: loadingCreateSchedule,
      click: () => modalChangeSchedule.saveSchedule(),
    },
    {
      size: 'md',
      label: 'Отменить',
      outline: true,
      click: () => modalChangeSchedule.closeSchedule(),
    },
  ];
};
