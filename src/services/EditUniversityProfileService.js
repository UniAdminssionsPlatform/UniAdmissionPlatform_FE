import { CallAPI } from './axiosBase';
import { UPDATE_UNIVERSITY_PROFILE } from '../constants/Endpoints/EditUniversityProfileEndpoint';

export const UpdateUniversityProfile = (data) => CallAPI(UPDATE_UNIVERSITY_PROFILE, 'put', data);
