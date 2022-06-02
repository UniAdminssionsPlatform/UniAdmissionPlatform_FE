import { CallAPI } from './axiosBase';
import { GET_LIST_NATION_ENDPOINT } from '../constants/Endpoints/NationalityEndpoint';

export const getListNation = (data) => CallAPI(GET_LIST_NATION_ENDPOINT, 'get', data);
