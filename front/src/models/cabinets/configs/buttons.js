import { useRegistryCabinet } from '../../../stores/cabinets/registry';
import { useModalCreateCabinet } from '../../../stores/cabinets/modal';

export const buttonsSidePage = () => {
  const registryCabinet = useRegistryCabinet();

  const modalCreateCabinet = useModalCreateCabinet();

  return [
    {
      props: {
        unelevated: true,
        size: 'md',
        label: 'Создать',
      },
      event: {
        click: async () => await modalCreateCabinet.createCabinet(),
      },
    },
    {
      props: {
        outline: true,
        size: 'md',
        label: 'Отмена',
      },
      event: {
        click: () => registryCabinet.openModal(),
      },
    },
  ];
};
