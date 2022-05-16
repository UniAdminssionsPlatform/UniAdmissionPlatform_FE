import { selectedHighSchoolActions } from './selectedHighSchool-slice';
export const setSelectedHighSchool = (data) => (dispatch) => {
  dispatch(selectedHighSchoolActions.selectedHighSchool(data));
};
export const CancelSelectedHighSchool = () => (dispatch) => {
  dispatch(selectedHighSchoolActions.cancel());
};
