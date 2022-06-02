import { CallAPI } from './axiosBase';
import {
  GET_LIST_UNIVERSITY_ENDPOINT,
  GET_UNIVERSITY_BY_CODE_ENDPOINT
} from '../constants/Endpoints/UniversityEndpoint';

export const getUniversityByCode = (data) =>
  CallAPI(`${GET_UNIVERSITY_BY_CODE_ENDPOINT}?university-code=${data}`, 'get', data);
export const getListUniversity = (data) => CallAPI(GET_LIST_UNIVERSITY_ENDPOINT, 'get', data);
