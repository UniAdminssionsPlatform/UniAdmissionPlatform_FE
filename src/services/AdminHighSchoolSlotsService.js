import { CallAPI } from './axiosBase';
import { ENDPOINT_GET_LIST_SLOTS } from '../constants/Endpoints/AdminHighSchoolSlotsEndpoint';
export const getListSlotHighSchool = (data) => CallAPI(`${ENDPOINT_GET_LIST_SLOTS}`, 'get');
