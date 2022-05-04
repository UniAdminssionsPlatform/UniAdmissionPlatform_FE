import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_SLOT } from '../constants/Endpoints/AdminUniversitySlotsEndpoint';
export const getListSlotByHighSchoolId = (data) => CallAPI(`${PATH_GET_LIST_SLOT}?high-school-id=${data}`, 'get');
