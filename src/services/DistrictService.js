import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_DISTRICT_BY_PROVINCE, PATH_GET_DISTRICT_BY_ID } from '../constants/Endpoints/DistrictEndpoint';

export const getListDistrictByProvince = (data) =>
  CallAPI(`${PATH_GET_LIST_DISTRICT_BY_PROVINCE}?province-id=${data}`, 'get', data);
export const getDistrictById = (data) => CallAPI(`${PATH_GET_DISTRICT_BY_ID}/${data}`, 'get', data);
