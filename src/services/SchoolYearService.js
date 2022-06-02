import { CallAPI } from './axiosBase';
import { GET_LIST_YEAR_ENDPOINT } from '../constants/Endpoints/SchoolYearEndpoint';

export const getAllSchoolYear = (data) => CallAPI(`${GET_LIST_YEAR_ENDPOINT}?limit=200`, 'get', data);
