import { CallAPI } from './axiosBase';
import {
  ENDPOINT_COMMENT_EVENT_BY_EVENT_ID,
  ENDPOINT_GET_COMMENT_BY_EVENT_ID,
  ENDPOINT_GET_EVENT_PUBLISH_BY_ID
} from '../constants/Endpoints/PublishEndpoint';
export const getEventPublishByIdService = (id) => CallAPI(`${ENDPOINT_GET_EVENT_PUBLISH_BY_ID}${id}`, 'GET');
export const getCommentByEventIdService = (data) =>
  CallAPI(`${ENDPOINT_GET_COMMENT_BY_EVENT_ID}?event-id=${data.eventId}&page=${data.page}&limit=${data.limit}`);
export const commentToTheEventService = (data) => CallAPI(`${ENDPOINT_COMMENT_EVENT_BY_EVENT_ID}`, 'POST', data);
