import { loadTimeAction } from './loadTime-slice';
export const setIsLoading = () => (dispatch) => {
  dispatch(loadTimeAction.isLoading());
};
export const setIsLoaded = () => (dispatch) => {
  dispatch(loadTimeAction.loaded());
};
