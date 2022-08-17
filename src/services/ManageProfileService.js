import { CallAPI } from './axiosBase';
import {
  GET_HIGH_SCHOOL_REPRESENTATIVE_PROFILE_ENDPOINT,
  GET_STUDENT_INFORMATION_ENDPOINT,
  GET_UNIVERSITY_REPRESENTATIVE_PROFILE_ENDPOINT
} from '../constants/Endpoints/ManageProfileEndpoint';

export const getAccountInfor = (data) => CallAPI(`${GET_STUDENT_INFORMATION_ENDPOINT}/${data}`, 'get', data);

export const getHighSchoolRepresentatives = (data) =>
  CallAPI(`${GET_HIGH_SCHOOL_REPRESENTATIVE_PROFILE_ENDPOINT}`, 'get', data);

export const getUniversityRepresentatives = (data) =>
  CallAPI(`${GET_UNIVERSITY_REPRESENTATIVE_PROFILE_ENDPOINT}`, 'get', data);
