import {
  APPROVE_REJECT_EVENT_CHECK_ENDPOINT,
  GET_LIST_EVENT_CHECK_ENDPOINT
} from '../../constants/Endpoints/AdminHighSchoolEventCheckEndpoint';
import { CallAPI } from '../axiosBase';
export const approveAEventService = (payload) =>
  CallAPI(`${APPROVE_REJECT_EVENT_CHECK_ENDPOINT}${payload}/approve`, 'put');
export const rejectAEventService = (payload) =>
  CallAPI(`${APPROVE_REJECT_EVENT_CHECK_ENDPOINT}${payload.id}/reject`, 'put', { reason: payload.reason });
export const getListEventCheckService = (payload) =>
  CallAPI(
    `${GET_LIST_EVENT_CHECK_ENDPOINT}?page=${payload.page}&limit=${payload.limit}&status=${payload.status}`,
    'get'
  );
