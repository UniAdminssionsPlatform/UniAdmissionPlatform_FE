import { CallAPI } from './axiosBase';
import {
  CLOSE_A_SLOT_ENDPOINT,
  CREATE_NEW_SLOTS_ENDPOINT,
  ENDPOINT_GET_LIST_SLOTS
} from '../constants/Endpoints/AdminHighSchoolSlotsEndpoint';

export const getListSlotHighSchool = (data) => CallAPI(`${ENDPOINT_GET_LIST_SLOTS}?limit=100`, 'get');
export const createNewSlot = (data) => CallAPI(`${CREATE_NEW_SLOTS_ENDPOINT}`, 'post', data);
export const closeASlot = (data) => CallAPI(CLOSE_A_SLOT_ENDPOINT, `PUT`, data);
