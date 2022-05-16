import { PATH_GET_LIST_EVENT_FOR_HIGHSCHOOL } from '../../../constants/Endpoints/GetListEventForHighschoolEnpoint';
import { CallAPI } from '../../axiosBase';

export const EventForHighschool = (data) =>
  CallAPI(`${PATH_GET_LIST_EVENT_FOR_HIGHSCHOOL}/${data}/event-slot`, 'get', data);
