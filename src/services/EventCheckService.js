import { CallAPI } from './axiosBase';
import { EVENT_CHECK } from '../constants/Endpoints/EventCheckEndpoint';
export const GetListEventCheck = (data) => CallAPI(EVENT_CHECK, 'get', data, data);
