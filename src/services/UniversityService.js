import { CallAPI } from './axiosBase';
import { PATH_GET_UNIVERSITY_BY_CODE } from '../constants/Endpoints/UniversityEndpoint';

export const getUniversityByCode = (data) =>
  CallAPI(`${PATH_GET_UNIVERSITY_BY_CODE}?university-code=${data}`, 'get', data);
