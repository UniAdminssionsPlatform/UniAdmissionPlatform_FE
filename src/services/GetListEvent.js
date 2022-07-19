import { CallAPI } from './axiosBase';
import { GET_LIST_EVENT_ENDPOINT } from '../constants/Endpoints/GetListEventEnpoint';

export const ListEvent = (data) => CallAPI(GET_LIST_EVENT_ENDPOINT, 'get', data);
