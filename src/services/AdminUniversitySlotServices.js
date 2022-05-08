import { CallAPI } from './axiosBase';
import { GET_LIST_SLOTS_ENDPOINT } from '../constants/Endpoints/AdminUniversitySlotsEndpoint';
export const getListSlotBySchoolId = (id) => CallAPI(`${GET_LIST_SLOTS_ENDPOINT}?high-school-id=${id}`, 'get');
