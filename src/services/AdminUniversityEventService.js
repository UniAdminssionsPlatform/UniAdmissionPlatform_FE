import { CallAPI } from './axiosBase';
import { GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT } from '../constants/Endpoints/AdminUniveristyEventEndpoint';
export const getListEventFromDateToDateApi = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_BY_DATE_TO_DATE_ENDPOINT}/${data.universityID}/events?from-date=${data.fromDate}&to-date=${data.toDate}`,
    'get'
  );
