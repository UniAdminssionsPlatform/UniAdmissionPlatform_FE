import { CallAPI } from './axiosBase';
import { GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING } from '../constants/Endpoints/HighSchoolRepresentativesEndpoint';

export const getAllPendingAccount = (data) => CallAPI(`${GET_LIST_HIGH_SCHOOL_REPRESENTATIVES_PENDING}`, 'get', data);
