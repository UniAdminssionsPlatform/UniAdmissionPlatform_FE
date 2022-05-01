import { PATH_GET_LIST_WARD_BY_DISTRICT_ID } from '../constants/Endpoints/WardEndpoint';
import { CallAPI } from './axiosBase';

export const getListWardByDistrictId = (data) =>
  CallAPI(`${PATH_GET_LIST_WARD_BY_DISTRICT_ID}?district-id=${data}`, 'get', data);
