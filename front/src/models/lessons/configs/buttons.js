import { useRegistryLessons } from '../../../stores/lessons/registry';
import { useModalLessons } from '../../../stores/lessons/modal';

export const buttonsSidePage = () => {
  const registryLessons = useRegistryLessons();

  const modalLessons = useModalLessons();

  return [
    {
      props: {
        unelevated: true,
        size: 'md',
        label: 'Создать',
      },
      event: {
        click: async () => await modalLessons.createLessons(),
      },
    },
    {
      props: {
        outline: true,
        size: 'md',
        label: 'Отмена',
      },
      event: {
        click: () => registryLessons.openModal(),
      },
    },
  ];
};
