import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_PROVINCE } from '../constants/Endpoints/ProvinceEndpoint';

export const getListProvinces = (data) => CallAPI(PATH_GET_LIST_PROVINCE, 'get', data);
