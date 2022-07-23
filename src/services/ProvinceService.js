import { CallAPI } from './axiosBase';
import { LIST_PROVINCE_ENDPOINT } from '../constants/Endpoints/ProvinceEndpoint';

export const getListProvinces = (data) => CallAPI(LIST_PROVINCE_ENDPOINT, 'get', data);
export const getProvinceById = (data) => CallAPI(`${LIST_PROVINCE_ENDPOINT}/${data}`, 'get', data);
