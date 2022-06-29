import { CallAPI } from './axiosBase';
import {
  GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING,
  ACTIVE_HIGH_SCHOOL_REPRESENTATIVES_ACCOUNT
} from '../constants/Endpoints/HighSchoolRepresentativesEndpoint';

export const getAllPendingAccount = (data) =>
  CallAPI(`${GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING}`, 'get', '', data);

export const activeAccount = (data) => CallAPI(`${ACTIVE_HIGH_SCHOOL_REPRESENTATIVES_ACCOUNT}`, 'put', '', data);
