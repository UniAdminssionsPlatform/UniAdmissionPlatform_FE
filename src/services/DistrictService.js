import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_DISTRICT_BY_PROVINCE } from '../constants/Endpoints/DistrictEndpoint';

export const getListDistrictByProvince = (data) =>
  CallAPI(`${PATH_GET_LIST_DISTRICT_BY_PROVINCE}?province-id=${data}`, 'get', data);
