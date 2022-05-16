import { CallAPI } from './axiosBase';
import {
  CLOSE_A_SLOT_ENDPOINT,
  CREATE_NEW_SLOTS_ENDPOINT,
  ENDPOINT_GET_LIST_SLOTS
} from '../constants/Endpoints/AdminHighSchoolSlotsEndpoint';
const bindingData = (data) => {
  console.log(data);
  let endPoint = '?';
  if (data?.startDate) endPoint = `${endPoint}?start-date=${data?.startDate}`;
  if (data?.endDate) endPoint = `${endPoint}&end-date=${data?.endDate}`;
  if (data?.status) endPoint = `${endPoint}&status=${data?.status}`;
  return `${endPoint}&limit=100`;
};
export const getListSlotHighSchool = (data) => CallAPI(`${ENDPOINT_GET_LIST_SLOTS}${bindingData(data)}`, 'get');
export const createNewSlot = (data) => CallAPI(`${CREATE_NEW_SLOTS_ENDPOINT}`, 'post', data);
export const closeASlot = (data) => CallAPI(CLOSE_A_SLOT_ENDPOINT, `PUT`, data);
