import { CallAPI } from './axiosBase';
import { GET_LIST_WARD_BY_DISTRICT_ID_ENDPOINT } from '../constants/Endpoints/WardEndpoint';

export const getListWardByDistrictId = (data) =>
  CallAPI(`${GET_LIST_WARD_BY_DISTRICT_ID_ENDPOINT}?district-id=${data}`, 'get', data);
