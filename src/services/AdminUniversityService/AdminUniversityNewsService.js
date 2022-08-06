import {
  CREATE_A_NEW_ENDPOINT,
  DELETE_A_NEW_BY_NEW_ID_END_POINT,
  GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT,
  SET_TAG_IS_PUBLISH_ENDPOINT,
  UPDATE_A_NEW_END_POINT
} from '../../constants/Endpoints/AdminUniversityNewsEndpoint';
import { CallAPI } from '../axiosBase';
export const getListNewsForUniversityService = (data) =>
  CallAPI(
    `${GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT}?is-publish=${data.isPublish}&title=${data.title}&create-date=${data.createDate}&tags=${data.tags}&sort=${data.sort}&page=${data.page}&limit=${data.limit}`,
    'GET'
  );
export const createANewService = (data) => CallAPI(`${CREATE_A_NEW_ENDPOINT}`, 'POST', data);
export const setNewPublishService = (data) =>
  CallAPI(`${SET_TAG_IS_PUBLISH_ENDPOINT}${data.id}/set-publish`, 'PUT', data.payload);
export const uploadANewService = (data) => CallAPI(`${UPDATE_A_NEW_END_POINT}${data.id}`, 'PUT', data.payload);
export const deleteANewService = (data) => CallAPI(`${DELETE_A_NEW_BY_NEW_ID_END_POINT}${data}`, 'DELETE');
