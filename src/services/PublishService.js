import { CallAPI } from './axiosBase';
import {
  ENDPOINT_COMMENT_EVENT_PUBLISH_BY_EVENT_ID,
  ENDPOINT_FOLLOW_EVENT_BY_EVENT_ID,
  ENDPOINT_GET_A_GOING_EVENT_BY_HIGH_SCHOOL_ID,
  ENDPOINT_GET_A_HIGH_SCHOOL_BY_ID,
  ENDPOINT_GET_A_NEW_PUBLISH,
  ENDPOINT_GET_COMMENT_BY_EVENT_PUBLISH_ID,
  ENDPOINT_GET_EVENT_PUBLISH_BY_ID,
  ENDPOINT_GET_LIST_CURRENT_EVENT_WITH_STUDENT_ID,
  ENDPOINT_GET_UNIVERSITY_PROFILE_BY_ID
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
//get high school by id
export const getAHighSchoolProfileByIdService = (id) => CallAPI(`${ENDPOINT_GET_A_HIGH_SCHOOL_BY_ID}/${id}`, 'get');
//get university by id
export const getAUniversityProfileByIdService = (id) => CallAPI(`${ENDPOINT_GET_UNIVERSITY_PROFILE_BY_ID}${id}`, 'get');
//follow a event by event id
export const followAEventByEventID = (id) =>
  CallAPI(`${ENDPOINT_FOLLOW_EVENT_BY_EVENT_ID}?event-id=${id}&is-follow=true`, 'POST');
//unfollow a event by event id
export const unFollowAEventByEventID = (id) =>
  CallAPI(`${ENDPOINT_FOLLOW_EVENT_BY_EVENT_ID}?event-id=${id}&is-follow=false`, 'POST');
export const getAOnGoingEventByUniversityId = (id) =>
  CallAPI(`${ENDPOINT_GET_A_GOING_EVENT_BY_HIGH_SCHOOL_ID}${id}/list-events`, 'get');
export const getListCurrentEventByStudentRole = () =>
  CallAPI(`${ENDPOINT_GET_LIST_CURRENT_EVENT_WITH_STUDENT_ID}?page=1&limit=1000`, 'get');
