import { CallAPI } from './axiosBase';
import { GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT } from '../constants/Endpoints/AdminUniversityNewsEndpoint';
export const getListNewsForUniversityService = (data) =>
  CallAPI(
    `${GET_LIST_NEW_FOR_UNIVERSITY_ENDPOINT}?is-publish=${data.isPublish}&title=${data.title}&create-date=${data.createDate}&tags=${data.tags}&sort=${data.sort}&page=${data.page}&limit=${data.limit}`,
    'GET'
  );
