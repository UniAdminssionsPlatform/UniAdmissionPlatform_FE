import { CallAPI } from './axiosBase';
import { GET_GOAL_ADMISSION_ENDPOINT } from '../constants/Endpoints/GoalAdmissionEndpoint';

export const getGoalAdmission = (data) => CallAPI(`${GET_GOAL_ADMISSION_ENDPOINT}`, 'get', '', data);
