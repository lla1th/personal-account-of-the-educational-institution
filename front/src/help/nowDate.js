import moment from 'moment/moment';

export default (language) => {
  moment.locale(language);

  return moment().format('LLLL');
};
