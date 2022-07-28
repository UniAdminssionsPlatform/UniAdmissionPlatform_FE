import { CallAPI } from './axiosBase';
import { GET_GOAL_ADMISSION_ENDPOINT, ADD_GOAL_ADMISISON_ENDPOINT } from '../constants/Endpoints/GoalAdmissionEndpoint';

export const getGoalAdmission = (data) => CallAPI(`${GET_GOAL_ADMISSION_ENDPOINT}`, 'get', '', data);
export const addGoalAdmission = (data) => CallAPI(`${ADD_GOAL_ADMISISON_ENDPOINT}`, 'post', data);
