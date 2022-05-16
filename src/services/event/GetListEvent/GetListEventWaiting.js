import { PATH_GET_LIST_EVENT_WAITING } from '../../../constants/Endpoints/GetListEventWaitingEndpoint';
import { CallAPI } from '../../axiosBase';

export const EventWaiting = (data) =>
  CallAPI(
    `${PATH_GET_LIST_EVENT_WAITING}/${data.universityID}/list-events?event-name=${data.name}&status-event=0&event-type-id=${data.type}`,
    'get',
    data
  );
