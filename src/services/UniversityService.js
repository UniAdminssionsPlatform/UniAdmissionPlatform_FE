import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_UNIVERSITY, PATH_GET_UNIVERSITY_BY_CODE } from '../constants/Endpoints/UniversityEndpoint';

export const getUniversityByCode = (data) =>
  CallAPI(`${PATH_GET_UNIVERSITY_BY_CODE}?university-code=${data}`, 'get', data);
export const getListUniversity = (data) => CallAPI(PATH_GET_LIST_UNIVERSITY, 'get', data);
