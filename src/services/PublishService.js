import { CallAPI } from './axiosBase';
import { ENDPOINT_GET_EVENT_PUBLISH_BY_ID } from '../constants/Endpoints/PublishEndpoint';
export const getEventPublishByIdService = (id) => CallAPI(`${ENDPOINT_GET_EVENT_PUBLISH_BY_ID}${id}`, 'GET');
