/**
 * Миксин для преобразование формата даты
 * в формат: 04 апреля 2023
 * @param date
 * @returns {string}
 */
export default {
  methods: {
    formatDate: (date) => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const intlDate = new Intl.DateTimeFormat('ru-RU', options);

      return intlDate.format(date);
    },
  },
};
