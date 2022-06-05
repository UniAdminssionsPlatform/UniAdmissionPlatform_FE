import {
  BOOK_A_SLOT_IN_ADMIN_UNIVERSITY_ENDPOINT,
  GET_LIST_SLOTS_ENDPOINT
} from '../constants/Endpoints/AdminUniversitySlotsEndpoint';
import { CallAPI } from './axiosBase';
export const getListSlotBySchoolId = (id) =>
  CallAPI(`${GET_LIST_SLOTS_ENDPOINT}?high-school-id=${id}&limit=1000`, 'get');
export const bookASlotInAdminUniversity = (data) => CallAPI(`${BOOK_A_SLOT_IN_ADMIN_UNIVERSITY_ENDPOINT}`, 'PUT', data);
