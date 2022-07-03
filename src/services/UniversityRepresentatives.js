import {
  ACTIVE_UNIVERSITY_REPRESENTATIVES_ACCOUNT_ENDPOINT,
  GET_UNIVERSITY_REPRESENTATIVES_PENDING_ENDPOINT
} from '../constants/Endpoints/UniversityRepresentativesEndpoint';
import { CallAPI } from './axiosBase';

export const getAllPendingAccount = (data) =>
  CallAPI(`${GET_UNIVERSITY_REPRESENTATIVES_PENDING_ENDPOINT}`, 'get', '', data);
export const activeAccount = (data) =>
  CallAPI(`${ACTIVE_UNIVERSITY_REPRESENTATIVES_ACCOUNT_ENDPOINT}`, 'put', '', data);
