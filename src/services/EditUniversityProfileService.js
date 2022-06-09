import { UPDATE_UNIVERSITY_PROFILE } from '../constants/Endpoints/EditUniversityProfileEndpoint';
import { CallAPI } from './axiosBase';

export const UpdateUniversityProfile = (data) => CallAPI(UPDATE_UNIVERSITY_PROFILE, 'put', data);
