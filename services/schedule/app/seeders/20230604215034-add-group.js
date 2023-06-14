// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4 } = require('uuid');

module.exports = {
  up: async (queueInterface) => {
    await queueInterface.bulkInsert('group', [
      {
        id: v4(),
        full_name: 'Программисты',
        short_name: 'ИП-1-41',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Программисты',
        short_name: 'ИП-1-31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Программисты',
        short_name: 'ИП-1-21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Программисты',
        short_name: 'ИП-1-11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Программисты',
        short_name: 'ИП-1-31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queueInterface.bulkInsert('cabinets', [
      {
        id: v4(),
        full_name: 'Кабинет математики',
        short_name: '426а',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Кабинет русского языка',
        short_name: '312',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Кабинет информатики',
        short_name: '312',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Кабинет физики',
        short_name: '313',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Кабинет информатики 1 этаж',
        short_name: '108а',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        full_name: 'Кабинет информатики 1 этаж',
        short_name: '108б',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queueInterface.bulkInsert('lessons', [
      {
        id: v4(),
        name: 'Русский язык',
        code: '23.321/23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: v4(),
        name: 'Разработка мобильного приложения',
        code: 'ИП 01.04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
