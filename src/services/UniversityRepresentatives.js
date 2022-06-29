import { CallAPI } from './axiosBase';
import {
  GET_UNIVERSITY_REPRESENTATIVES_PENDING_ENDPOINT,
  ACTIVE_UNIVERSITY_REPRESENTATIVES_ACCOUNT_ENDPOINT
} from '../constants/Endpoints/UniversityRepresentativesEndpoint';

export const getAllPendingAccount = (data) =>
  CallAPI(`${GET_UNIVERSITY_REPRESENTATIVES_PENDING_ENDPOINT}`, 'get', '', data);
export const activeAccount = (data) =>
  CallAPI(`${ACTIVE_UNIVERSITY_REPRESENTATIVES_ACCOUNT_ENDPOINT}`, 'put', '', data);
