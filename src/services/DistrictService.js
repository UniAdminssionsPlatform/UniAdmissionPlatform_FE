import { CallAPI } from './axiosBase';
import {
  GET_DISTRICT_BY_ID_ENDPOINT,
  GET_LIST_DISTRICT_BY_PROVINCE_ENDPOINT
} from '../constants/Endpoints/DistrictEndpoint';

export const getListDistrictByProvince = (data) =>
  CallAPI(`${GET_LIST_DISTRICT_BY_PROVINCE_ENDPOINT}?province-id=${data}`, 'get', data);
export const getDistrictById = (data) => CallAPI(`${GET_DISTRICT_BY_ID_ENDPOINT}/${data}`, 'get', data);
