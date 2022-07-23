import {
  CLOSE_A_SLOT_ENDPOINT,
  CREATE_NEW_SLOTS_ENDPOINT,
  GET_LIST_SLOTS_ENDPOINT
} from '../../constants/Endpoints/AdminHighSchoolSlotsEndpoint';
import { CallAPI } from '../axiosBase';
const bindingData = (data) => {
  console.log(data);
  let endPoint = '?';
  if (data?.startDate) endPoint = `${endPoint}?start-date=${data?.startDate}`;
  if (data?.endDate) endPoint = `${endPoint}&end-date=${data?.endDate}`;
  if (data?.status) endPoint = `${endPoint}&status=${data?.status}`;
  return `${endPoint}&limit=100`;
};
export const getListSlotHighSchool = (data) => CallAPI(`${GET_LIST_SLOTS_ENDPOINT}${bindingData(data)}`, 'get');
export const createNewSlot = (data) => CallAPI(`${CREATE_NEW_SLOTS_ENDPOINT}`, 'post', data);
export const closeASlot = (data) => CallAPI(`${CLOSE_A_SLOT_ENDPOINT}?slot-id=${data['slot-id']}`, `PUT`, data);
export const fullASlot = (data) => CallAPI(`${CLOSE_A_SLOT_ENDPOINT}?slot-id=${data['slot-id']}`, `PUT`, data);
