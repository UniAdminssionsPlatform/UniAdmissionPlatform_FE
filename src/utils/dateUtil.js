import { SLOT_01_END, SLOT_01_START, SLOT_02_END, SLOT_02_START } from '../constants/AppConst';
import moment from 'moment';

export const enumerateDaysBetweenDates = function (startDate, endDate) {
  const dates = [];
  const currDate = moment(startDate).startOf('day');
  const lastDate = moment(endDate).startOf('day');
  while (currDate.diff(lastDate) <= 0) {
    dates.push(currDate.clone().toDate());
    currDate.add(1, 'days');
  }
  return dates;
};
export const parseCorrectDateBaseSlot = (arr, slot) => {
  const result = [];
  arr.map((date) => {
    const currDate = moment(date).startOf('day');
    switch (slot) {
      case 1:
        result.push({
          startDate: moment(currDate).add(SLOT_01_START, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(currDate).add(SLOT_01_END, 'hours').format('YYYY-MM-DD HH:mm:ss')
        });
        break;
      case 2:
        result.push({
          startDate: moment(currDate).add(SLOT_02_START, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(currDate).add(SLOT_02_END, 'hours').format('YYYY-MM-DD HH:mm:ss')
        });
        break;
      case 3:
        result.push({
          startDate: moment(currDate).add(SLOT_01_START, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(currDate).add(SLOT_01_END, 'hours').format('YYYY-MM-DD HH:mm:ss')
        });
        result.push({
          startDate: moment(currDate).add(SLOT_02_START, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(currDate).add(SLOT_02_END, 'hours').format('YYYY-MM-DD HH:mm:ss')
        });
        break;
    }
  });
  return result;
};
