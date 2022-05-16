import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_WARD_BY_DISTRICT_ID } from '../constants/Endpoints/WardEndpoint';

export const getListWardByDistrictId = (data) =>
  CallAPI(`${PATH_GET_LIST_WARD_BY_DISTRICT_ID}?district-id=${data}`, 'get', data);
