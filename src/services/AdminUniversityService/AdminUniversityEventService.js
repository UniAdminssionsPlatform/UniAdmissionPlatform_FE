import { CallAPI } from '../axiosBase';
import {
  GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT,
  GET_LIST_EVENT_CHECK,
  UPDATE_EVENT
} from '../../constants/Endpoints/AdminUniveristyEventEndpoint';
export const getListEventFromDateToDateService = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT}/${data.universityID}/events?from-date=${data.fromDate}&to-date=${data.toDate}`,
    'get'
  );
export const getListEventCheckService = (data) =>
  CallAPI(`${GET_LIST_EVENT_CHECK}?status=${data.status}&page=${data.page}&limit=${data.limit}`);

export const updateEventService = (data) => CallAPI(`${UPDATE_EVENT}/${data.id}`, 'put', data);
