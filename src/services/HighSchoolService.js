import { CallAPI } from './axiosBase';
import { PATH_GET_HIGH_SCHOOL_BY_CODE } from '../constants/Endpoints/HighSchoolEndpoint';

export const getHighSchoolByCode = (data) =>
  CallAPI(`${PATH_GET_HIGH_SCHOOL_BY_CODE}?high-school-code=${data}`, 'get', data);
