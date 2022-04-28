import { CallAPI } from './axiosBase';
import { PATH_GET_HIGH_SCHOOL_BY_CODE, PATH_GET_LIST_HIGH_SCHOOL } from '../constants/Endpoints/HighSchoolEndpoint';

export const getHighSchoolByCode = (data) =>
  CallAPI(`${PATH_GET_HIGH_SCHOOL_BY_CODE}?high-school-code=${data}`, 'get', data);
export const getListHighSchool = (data) => CallAPI(PATH_GET_LIST_HIGH_SCHOOL, 'get', data);
