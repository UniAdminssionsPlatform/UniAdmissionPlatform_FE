import { CallAPI } from './axiosBase';
import { UPDATE_HIGHSCHOOL_PROFILE } from '../constants/Endpoints/EditHighschoolProfileEndpoint';

export const UpdateHighschoolProfile = (data) => CallAPI(UPDATE_HIGHSCHOOL_PROFILE, 'put', data);
