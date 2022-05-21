import { PATH_GET_LIST_EVENT_FOR_UNIVERSITY } from '../../../constants/Endpoints/GetListEventForUniversity';
import { CallAPI } from '../../axiosBase';

export const EventForUniversity = (data) =>
  CallAPI(
    `${PATH_GET_LIST_EVENT_FOR_UNIVERSITY}/${data.universityID}/list-events?event-name=${data.name}&status-event=${data.status}&event-host-name=${data.hostname}&event-type-id=${data.eventtype}&limit=50`,
    'get',
    data
  );
