import { CallAPI } from './axiosBase';
import { DETAIL_EVENT_ENDPOINT } from '../constants/Endpoints/EventEndpoint';

export const getDetailEvent = (data) => CallAPI(`${DETAIL_EVENT_ENDPOINT}/${data}`, 'get');
