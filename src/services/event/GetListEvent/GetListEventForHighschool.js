import { CallAPI } from '../../axiosBase';
import { PATH_GET_LIST_EVENT_FOR_HIGHSCHOOL } from '../../../constants/Endpoints/GetListEventForHighschoolEnpoint';

export const EventForHighschool = (data) =>
  CallAPI(`${PATH_GET_LIST_EVENT_FOR_HIGHSCHOOL}/${data}/event-slot`, 'get', data);
