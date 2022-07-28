import {
  ADD_GOAL_ADMISISON_ENDPOINT,
  DELETE_GOAL_ADMISSION_ENDPOINT,
  GET_GOAL_ADMISSION_ENDPOINT
} from '../constants/Endpoints/GoalAdmissionEndpoint';
import { CallAPI } from './axiosBase';

export const getGoalAdmission = (data) => CallAPI(`${GET_GOAL_ADMISSION_ENDPOINT}`, 'get', '', data);
export const addGoalAdmission = (data) => CallAPI(`${ADD_GOAL_ADMISISON_ENDPOINT}`, 'post', data);
export const deleteGoalAdmission = (data) => CallAPI(`${DELETE_GOAL_ADMISSION_ENDPOINT}/${data}`, 'delete');
