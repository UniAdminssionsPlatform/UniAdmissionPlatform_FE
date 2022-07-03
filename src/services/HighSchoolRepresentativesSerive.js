import {
  ACTIVE_HIGH_SCHOOL_REPRESENTATIVES_ACCOUNT,
  GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING
} from '../constants/Endpoints/HighSchoolRepresentativesEndpoint';
import { CallAPI } from './axiosBase';

export const getAllPendingAccount = (data) =>
  CallAPI(`${GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING}`, 'get', '', data);

export const activeAccount = (data) => CallAPI(`${ACTIVE_HIGH_SCHOOL_REPRESENTATIVES_ACCOUNT}`, 'put', '', data);
