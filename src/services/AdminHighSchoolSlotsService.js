import { CallAPI } from './axiosBase';
import {
  CREATE_NEW_SLOTS_ENDPOINT,
  ENDPOINT_GET_LIST_SLOTS
} from '../constants/Endpoints/AdminHighSchoolSlotsEndpoint';
export const getListSlotHighSchool = (data) => CallAPI(`${ENDPOINT_GET_LIST_SLOTS}`, 'get');
export const createNewSlot = (data) => CallAPI(CREATE_NEW_SLOTS_ENDPOINT, 'post', data);
