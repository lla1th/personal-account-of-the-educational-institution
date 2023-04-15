import { defineStore } from 'pinia';
import { ref } from 'vue';
import moment from 'moment';

import {
  well, pair, lesson, teacher, cabinet, group,
} from '../../entities/mock';

import students from '../../entities/students';

import { useDetailAcademicJournal } from './detail';

export const useModalAcademicJournal = defineStore('modalAcademicJournal', () => {
  const detailAcademicJournal = useDetailAcademicJournal();

  const viewModalCreateGrade = ref(false);

  const form = ref({
    date: moment(new Date()).format('DD.MM.YYYY'),
    message: '',
    student: null,
    group: null,
    grade: null,
    well: null,
  });

  const dataInputs = ref({
    well,
    pair,
    lesson,
    teacher,
    cabinet,
    group,
    students: students(),
  });

  const $reset = () => {
    viewModalCreateGrade.value = false;

    form.value = {
      date: moment(new Date()).format('DD.MM.YYYY'),
      message: '',
      student: null,
      group: null,
      grade: null,
      well: null,
    };
  };

  const createAssessment = () => {
    detailAcademicJournal.addNewAssessmentFromStudent(form.value);

    $reset();
  };

  return {
    /** Очистка */
    $reset,

    /** Хранилища */
    viewModalCreateGrade,
    form,
    dataInputs,

    createAssessment,
  };
});
