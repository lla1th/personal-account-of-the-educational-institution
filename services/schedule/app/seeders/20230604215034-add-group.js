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
    ]);
  },
};
