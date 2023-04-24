import moment from 'moment';

export default () => [
  {
    id: '1',
    shortName: 'Тест Т.Т',
    fullName: 'Тест Тестович Тестовал',
    date: moment().format('DD.MM.YYYY'),
    well: '4 курс',
    group: 'ИП1-41',
    grade: null,
    comment: null,
  },
];
