import { CallAPI } from '../axiosBase';
import {
  GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT,
  GET_LIST_EVENT_CHECK
} from '../../constants/Endpoints/AdminUniveristyEventEndpoint';
export const getListEventFromDateToDateApi = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT}/${data.universityID}/events?from-date=${data.fromDate}&to-date=${data.toDate}`,
    'get'
  );
export const getListEventCheck = (data) =>
  CallAPI(`${GET_LIST_EVENT_CHECK}?status=${data.status}&page=${data.page}&${data.limit}`);
