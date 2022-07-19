import { CallAPI } from './axiosBase';
import { DETAIL_EVENT_ENDPOINT, GET_LIST_EVENT_ENDPOINT } from '../constants/Endpoints/EventEndpoint';

export const getDetailEvent = (data) => CallAPI(`${DETAIL_EVENT_ENDPOINT}/${data}`, 'get');
export const getListEvent = (data) => CallAPI(`${GET_LIST_EVENT_ENDPOINT}`, 'get', '', data);
