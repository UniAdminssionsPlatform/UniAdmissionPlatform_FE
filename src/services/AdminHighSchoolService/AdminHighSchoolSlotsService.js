import {
  CLOSE_A_SLOT_ENDPOINT,
  CREATE_NEW_SLOTS_ENDPOINT,
  FULL_A_SLOT_ENDPOINT,
  GET_LIST_SLOTS_ENDPOINT,
  OPEN_A_SLOT_ENDPOINT
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
export const getListSlotHighSchoolService = (data) => CallAPI(`${GET_LIST_SLOTS_ENDPOINT}${bindingData(data)}`, 'get');
export const createNewSlotService = (data) => CallAPI(`${CREATE_NEW_SLOTS_ENDPOINT}`, 'post', data);
export const closeASlotService = (data) => CallAPI(`${CLOSE_A_SLOT_ENDPOINT}?slot-id=${data['slot-id']}`, `PUT`, data);
export const fullASlotService = (data) => CallAPI(`${FULL_A_SLOT_ENDPOINT}?slot-id=${data['slot-id']}`, `PUT`, data);
export const openASlotService = (data) => CallAPI(`${OPEN_A_SLOT_ENDPOINT}?slot-id=${data['slot-id']}`, `PUT`, data);
