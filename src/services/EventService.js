import { CallAPI } from './axiosBase';
import { DETAIL_EVENT_ENDPOINT, GET_LIST_EVENT_ENDPOINT } from '../constants/Endpoints/EventEndpoint';

export const getDetailEventByEventIdService = (data) => CallAPI(`${DETAIL_EVENT_ENDPOINT}/${data}`, 'get');
export const getListEventService = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_ENDPOINT}?page=${data.page}&limit=${data.limit}&status=${data.status}&sort=CreatedAt%20desc`,
    'get',
    '',
    data
  );
