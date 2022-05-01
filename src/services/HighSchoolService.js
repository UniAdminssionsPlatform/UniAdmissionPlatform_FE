import { CallAPI } from './axiosBase';
import {
  PATH_GET_HIGH_SCHOOL_BY_CODE,
  PATH_GET_HIGH_SCHOOL_BY_MANAGER_CODE,
  PATH_GET_LIST_HIGH_SCHOOL
} from '../constants/Endpoints/HighSchoolEndpoint';

export const getHighSchoolByCode = (data) =>
  CallAPI(`${PATH_GET_HIGH_SCHOOL_BY_CODE}?high-school-code=${data}`, 'get', data);
export const getListHighSchool = (data) =>
  CallAPI(`${PATH_GET_LIST_HIGH_SCHOOL}?phone-number=${data.phone}&district-id=${data.district}`, 'get', data, data);
export const getHighSchoolByManagerCode = (data) =>
  CallAPI(`${PATH_GET_HIGH_SCHOOL_BY_MANAGER_CODE}?high-school-manager-code=${data}`, 'get', data);
// export const getListHighSchoolBySearch = (data) =>
//   CallAPI(
//     `${PATH_GET_LIST_HIGH_SCHOOL}?name=${data.name}&address=${data.address}&phone-number=${data.phone}&status=${data.status}&district-id=${data.district}&email=${data.email}`,
//     'get',
//     data
//   );
