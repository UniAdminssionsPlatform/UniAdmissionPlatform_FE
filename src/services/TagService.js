import { CallAPI } from './axiosBase';
import { GET_LIST_TAG } from '../constants/Endpoints/TagEndpoint';
export const getListTag = () => CallAPI(`${GET_LIST_TAG}?page=1&limit=1000`, 'get');
