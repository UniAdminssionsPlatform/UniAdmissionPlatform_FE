import { CallAPI } from './axiosBase';
import {
  GET_LIST_EVENT_FOR_HIGHSCHOOL_ENDPOINT,
  PATH_GET_LIST_EVENT_FOR_HIGHSCHOOL
} from '../constants/Endpoints/GetListEventForHighschoolEnpoint';

export const EventForHighschool = (data) =>
  CallAPI(`${GET_LIST_EVENT_FOR_HIGHSCHOOL_ENDPOINT}/${data}/event-slot`, 'get', data);
