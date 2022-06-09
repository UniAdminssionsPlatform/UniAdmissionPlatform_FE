import { CallAPI } from './axiosBase';
import {
  GET_HIGH_SCHOOL_BY_CODE_ENDPOINT,
  GET_HIGH_SCHOOL_BY_ID,
  GET_HIGH_SCHOOL_BY_MANAGER_CODE_ENDPOINT,
  GET_LIST_HIGH_SCHOOL_ENDPOINT
} from '../constants/Endpoints/HighSchoolEndpoint';

export const getHighSchoolByCode = (data) =>
  CallAPI(`${GET_HIGH_SCHOOL_BY_CODE_ENDPOINT}?high-school-code=${data}`, 'get', data);
export const getListHighSchool = (data) =>
  CallAPI(
    `${GET_LIST_HIGH_SCHOOL_ENDPOINT}?phone-number=${data.phone}&district-id=${data.district}`,
    'get',
    data,
    data
  );
export const getHighSchoolByManagerCode = (data) =>
  CallAPI(`${GET_HIGH_SCHOOL_BY_MANAGER_CODE_ENDPOINT}?high-school-manager-code=${data}`, 'get', data);

export const getDetailHighSchool = (data) => CallAPI(`${GET_HIGH_SCHOOL_BY_ID}/${data}`, 'get', data);
