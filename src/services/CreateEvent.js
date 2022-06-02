import { CallAPI } from './axiosBase';
import { CREATE_EVENT_ENDPOINT } from '../constants/Endpoints/CreateEventEnpoint';

export const createEvent = (data) => CallAPI(CREATE_EVENT_ENDPOINT, 'post', data.event);
