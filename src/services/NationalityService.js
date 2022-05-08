import { CallAPI } from './axiosBase';
import { PATH_GET_LIST_NATION } from '../constants/Endpoints/NationalityEndpoint';

export const getListNation = (data) => CallAPI(PATH_GET_LIST_NATION, 'get', data);
