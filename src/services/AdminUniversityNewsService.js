import { CallAPI } from './axiosBase';
import {
  CREATE_A_NEW_ENDPOINT,
  GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT, SET_TAG_IS_PUBLISH_ENDPOINT
} from '../constants/Endpoints/AdminUniversityNewsEndpoint';
export const getListNewsForUniversityService = (data) =>
  CallAPI(
    `${GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT}?is-publish=${data.isPublish}&title=${data.title}&create-date=${data.createDate}&tags=${data.tags}&sort=${data.sort}&page=${data.page}&limit=${data.limit}`,
    'GET'
  );
export const createANewService = (data) => CallAPI(`${CREATE_A_NEW_ENDPOINT}`, 'POST', data);
export const setNewPublishService = (data) => CallAPI(`${SET_TAG_IS_PUBLISH_ENDPOINT}${data.id}/set-publish`,'PUT',data.payload)