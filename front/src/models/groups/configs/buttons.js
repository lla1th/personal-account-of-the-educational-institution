import { useRegistryGroups } from '../../../stores/groups/registry';
import { useModalGroups } from '../../../stores/groups/modal';

export const buttonsSidePage = () => {
  const registrylGroups = useRegistryGroups();

  const modalGroups = useModalGroups();

  return [
    {
      props: {
        unelevated: true,
        size: 'md',
        label: 'Создать',
      },
      event: {
        click: async () => modalGroups.createLessons(),
      },
    },
    {
      props: {
        outline: true,
        size: 'md',
        label: 'Отмена',
      },
      event: {
        click: () => registrylGroups.openModal(),
      },
    },
  ];
};
