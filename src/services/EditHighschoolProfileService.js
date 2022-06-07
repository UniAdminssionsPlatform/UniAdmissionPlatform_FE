import { UPDATE_HIGHSCHOOL_PROFILE } from '../constants/Endpoints/EditHighschoolProfileEndpoint';
import { CallAPI } from './axiosBase';

export const UpdateHighschoolProfile = (data) => CallAPI(UPDATE_HIGHSCHOOL_PROFILE, 'put', data);
