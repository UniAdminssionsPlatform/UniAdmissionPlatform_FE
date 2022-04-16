import * as cookie from 'js-cookie';
import { authenticationActions } from './authentication-slice';

import { TOKEN_KEY, USER_STORAGE } from '../../constants/AppConst';

export const SigninHandler = (data) => (dispatch) => {
  cookie.set(TOKEN_KEY, data.token);
  localStorage.setItem(USER_STORAGE, JSON.stringify(data));
  dispatch(authenticationActions.fetchingLoginSuccess(data));
};

export const logoutHandler = () => (dispatch) => {
  cookie.remove(TOKEN_KEY);
  localStorage.removeItem(USER_STORAGE);
  dispatch(authenticationActions.logout());
};
