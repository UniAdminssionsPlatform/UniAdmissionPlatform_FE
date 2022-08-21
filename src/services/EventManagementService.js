import { CallAPI } from './axiosBase';
import {
  GET_LIST_EVENT_TO_PUBLIC,
  GET_LIST_EVENT_TO_UNPUBLIC,
  PUBLIC_EVENT
} from '../constants/Endpoints/PublicUniversityEndpoint';

export const getListEventPublishService = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_TO_PUBLIC}/${data.universityID}/list-event?event-name=${data.name}&status-event=${data.status}&event-host-name=${data.hostname}&page=${data.page}&limit=${data.limit}&sort=CreatedAt%20desc`,
    'get',
    data
  );

export const getListEventUnPublishService = (data) =>
  CallAPI(
    `${GET_LIST_EVENT_TO_UNPUBLIC}/${data.universityID}/list-event?event-name=${data.name}&status-event=${data.status}&event-host-name=${data.hostname}&page=${data.page}&limit=${data.limit}&sort=CreatedAt%20desc`,
    'get',
    data
  );

export const PublicEvent = (data) => CallAPI(PUBLIC_EVENT, 'put', data);
