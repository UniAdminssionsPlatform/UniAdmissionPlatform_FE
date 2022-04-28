import { selectedHighSchoolActions } from './selectedHighSchool-slice';
export const SetSelectedEvent = (data) => (dispatch) => {
  dispatch(selectedHighSchoolActions.selectedHighSchool(data));
};
export const CancelSelectedEvent = () => (dispatch) => {
  dispatch(selectedHighSchoolActions.cancel());
};
