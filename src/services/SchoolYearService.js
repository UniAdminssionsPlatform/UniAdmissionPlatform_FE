import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_YEAR } from '../constants/Endpoints/SchoolYearEndpoint';

export const getAllSchoolYear = (data) => CallAPI(`${PATH_GET_LIST_YEAR}?limit=200`, 'get', data);
