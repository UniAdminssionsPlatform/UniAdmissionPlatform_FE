import { listEventCheckHighSchoolAction } from './listEventCheckHighSchool-slice';

export const storeListEventCheckHighSchool = (data) => (dispatch) => {
  dispatch(listEventCheckHighSchoolAction.storeListEventCheckHighSchool(data));
};

export const storePayLoadSearchEventCheckHighSchool = (data) => (dispatch) => {
  dispatch(listEventCheckHighSchoolAction.storeSearchPayload(data));
};

export const cleanListEventCheckHighSchool = () => (dispatch) => {
  dispatch(listEventCheckHighSchoolAction.cleanListEventCheckHighSchool());
};
