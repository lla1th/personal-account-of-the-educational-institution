import { ref } from 'vue';
import { defineStore } from 'pinia';
import Api from '../../utils/Api.js';

import { useModalCreateCabinet } from './modal';

export const useRegistryCabinet = defineStore('registryCabinet', () => {
  const modalCreateCabinet = useModalCreateCabinet();

  const cabinets = ref([]);

  const openModal = () => {
    modalCreateCabinet.openModal();
  };

  const getList = async () => {
    const { data: { data } } = await Api.get('schedule/cabinets');

    cabinets.value = data;
  };

  return {
    cabinets,

    openModal,
    getList,
  };
});
