import {
  APPROVE_REJECT_EVENT_CHECK_ENDPOINT,
  GET_LIST_EVENT_CHECK_ENDPOINT
} from '../constants/Endpoints/AdminHighSchoolEventCheckEndpoint';
import { CallAPI } from './axiosBase';

export const getListEventCheck = (payload) =>
  CallAPI(`${GET_LIST_EVENT_CHECK_ENDPOINT}?page=${payload.page}&limit=${payload.limit}`, 'get');
export const approveAEvent = (payload) => CallAPI(`${APPROVE_REJECT_EVENT_CHECK_ENDPOINT}${payload}/approve`, 'put');
export const rejectAEvent = (payload) =>
  CallAPI(`${APPROVE_REJECT_EVENT_CHECK_ENDPOINT}${payload.id}/reject`, 'put', { reason: payload.reason });
