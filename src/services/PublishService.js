import { CallAPI } from './axiosBase';
import {
  ENDPOINT_COMMENT_EVENT_PUBLISH_BY_EVENT_ID,
  ENDPOINT_GET_A_NEW_PUBLISH,
  ENDPOINT_GET_COMMENT_BY_EVENT_PUBLISH_ID,
  ENDPOINT_GET_EVENT_PUBLISH_BY_ID
} from '../constants/Endpoints/PublishEndpoint';
//get event by id
export const getAEventPublishByIdService = (id) => CallAPI(`${ENDPOINT_GET_EVENT_PUBLISH_BY_ID}${id}`, 'GET');
//get all comment by event Id
export const getCommentByEventIdService = (data) =>
  CallAPI(`${ENDPOINT_GET_COMMENT_BY_EVENT_PUBLISH_ID}?event-id=${data.eventId}&page=${data.page}&limit=${data.limit}`);
//comment to a post
export const commentToTheEventService = (data) =>
  CallAPI(`${ENDPOINT_COMMENT_EVENT_PUBLISH_BY_EVENT_ID}`, 'POST', data);
//get new by id
export const getANewPublishByEventIdService = (id) => CallAPI(`${ENDPOINT_GET_A_NEW_PUBLISH}/${id}`, 'get');
