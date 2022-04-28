import { CallAPI } from './axiosBase';
import { PATH_DETIAL_EVENT } from '../constants/Endpoints/EventEndpoint';

export const getDetailEvent = (data) => CallAPI(`${PATH_DETIAL_EVENT}/${data}`, 'get');
