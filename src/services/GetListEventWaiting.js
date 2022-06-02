import { GET_LIST_EVENT_WAITING_ENDPOINT } from '../constants/Endpoints/GetListEventWaitingEndpoint';
import { CallAPI } from './axiosBase';

export const EventWaiting = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_WAITING_ENDPOINT}/${data.universityID}/list-events?event-name=${data.name}&status-event=0&event-type-id=${data.type}`,
    'get',
    data
  );
