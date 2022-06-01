import { CallAPI } from './axiosBase';
import {
  GET_LIST_SLOTS_ENDPOINT,
  BOOK_A_SLOT_IN_ADMIN_UNIVERSITY
} from '../constants/Endpoints/AdminUniversitySlotsEndpoint';
export const getListSlotBySchoolId = (id) =>
  CallAPI(`${GET_LIST_SLOTS_ENDPOINT}?high-school-id=${id}&limit=1000`, 'get');
export const bookASlotInAdminUniversity = (data) => CallAPI(`${BOOK_A_SLOT_IN_ADMIN_UNIVERSITY}`, 'PUT', data);
