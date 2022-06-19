import { CallAPI } from './axiosBase';
import { GET_LIST_YEAR_ENDPOINT, GET_SCHOOL_YEAR_ENDPOINT } from '../constants/Endpoints/SchoolYearEndpoint';

export const getAllSchoolYear = (data) => CallAPI(`${GET_LIST_YEAR_ENDPOINT}?limit=200`, 'get', data);
export const getSchoolYear = (data) => CallAPI(`${GET_SCHOOL_YEAR_ENDPOINT}/${data}`, 'get', data);
