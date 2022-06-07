import { selectedHighSchoolActions } from './selectedHighSchool-slice';
import {SCHOOL_KEY} from "../../constants/AppConst";
export const setSelectedHighSchool = (data) => (dispatch) => {
  localStorage.setItem(SCHOOL_KEY, JSON.stringify(data));
  dispatch(selectedHighSchoolActions.selectedHighSchool(data));
};
export const CancelSelectedHighSchool = () => (dispatch) => {
  localStorage.removeItem(SCHOOL_KEY);
  dispatch(selectedHighSchoolActions.cancel());
};
