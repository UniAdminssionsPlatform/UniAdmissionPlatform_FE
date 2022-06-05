import { CREATE_EVENT_ENDPOINT } from '../constants/Endpoints/CreateEventEnpoint';
import { CallAPI } from './axiosBase';

export const createEvent = (data) => CallAPI(CREATE_EVENT_ENDPOINT, 'post', data.event);
