import { PATH_GET_LIST_EVENT_FOR_UNIVERSITY } from '../../../constants/Endpoints/GetListEventForUniversity';
import { CallAPI } from '../../axiosBase';

export const EventForUniversity = (data) =>
  CallAPI(`${PATH_GET_LIST_EVENT_FOR_UNIVERSITY}/${data}/list-events`, 'get', data);
